#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";

const [, , rawPatch, targetPathArg] = process.argv;

if (!rawPatch) {
  console.error("Usage: node scripts/update-package-json.mjs '{"scripts":{...}}' [path/to/package.json]");
  process.exit(1);
}

const packageJsonPath = targetPathArg ? path.resolve(targetPathArg) : path.resolve("package.json");

let patch;
try {
  patch = JSON.parse(rawPatch);
} catch (error) {
  console.error("Failed to parse patch JSON:", error instanceof Error ? error.message : error);
  process.exit(1);
}

let pkg;
try {
  const pkgRaw = readFileSync(packageJsonPath, "utf8");
  pkg = JSON.parse(pkgRaw);
} catch (error) {
  console.error("Unable to read or parse", packageJsonPath, "-", error instanceof Error ? error.message : error);
  process.exit(1);
}

const isObject = (value) => value && typeof value === "object" && !Array.isArray(value);

const merge = (target, source) => {
  if (!isObject(source)) {
    return source;
  }
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const targetValue = result[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      result[key] = Array.from(new Set([...targetValue, ...sourceValue]));
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      result[key] = merge(targetValue, sourceValue);
    } else {
      result[key] = sourceValue;
    }
  }
  return result;
};

const updated = merge(pkg, patch);

try {
  const directory = path.dirname(packageJsonPath);
  mkdirSync(directory, { recursive: true });
  writeFileSync(packageJsonPath, JSON.stringify(updated, null, 2) + "
", "utf8");
  console.log("Updated " + packageJsonPath);
} catch (error) {
  console.error("Failed to write", packageJsonPath, "-", error instanceof Error ? error.message : error);
  process.exit(1);
}
