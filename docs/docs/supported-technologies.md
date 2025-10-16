# Supported Technologies

The Pronto Prototype Studio builder can only rely on the technologies listed below. Submissions that introduce packages outside this list are rejected until the implementation swaps to an allowlisted option or the list is updated.

## Core Frontend Stack

Default toolchain for every prototype run.

- `react` (18.3.1) - Primary UI runtime.
- `react-dom` (18.3.1) - DOM renderer for React components.
- `react-router-dom` (6.26.2) - Client-side routing with hash/SPA support.
- `zod` (3.23.8) - Runtime validation and type inference for data contracts.
- `tailwindcss-animate` (1.0.7) - Animation presets for Tailwind CSS utilities.
- `typescript` (5.6.3) - Static typing and compiler checks.
- `vite` (7.1.9) - Build and dev server tooling.
- `@vitejs/plugin-react` (5.0.4) - JSX transform and React fast refresh for Vite.
- `tailwindcss` (3.4.13) - Utility-first styling framework.
- `postcss` (8.4.41) - Post-processing pipeline for Tailwind CSS.
- `autoprefixer` (10.4.19) - Vendor prefixer for generated CSS.
- Browser Storage APIs - localStorage and sessionStorage fallbacks for quick persistence.

## State, Forms & Persistence

State stores, caching helpers, and local persistence utilities.

- `@tanstack/react-query` (5.32.0) - Declarative async caching and mutations.
- `zustand` (4.5.2) - Minimalist global state store with hooks.
- `redux` (4.2.1) - Predictable immutable state container.
- `@reduxjs/toolkit` (1.9.7) - Batteries-included Redux tooling.
- `immer` (10.0.2) - Immutable state updates via draft mutation.
- `react-hook-form` (7.49.2) - Lightweight form state and validation.
- `@hookform/resolvers` (3.3.4) - Glue between React Hook Form and schema validators.
- `localforage` (1.10.0) - IndexedDB-backed async storage with localStorage fallback.
- `yup` (1.3.3) - Schema validation for form data.

## UI Components & Styling

Design systems, icon packs, and styling utilities.

- `@headlessui/react` (1.7.17) - Accessible primitives for menus, dialogs, and popovers.
- `@mui/material` (5.15.18) - Material UI component suite.
- `@radix-ui/react-dropdown-menu` (2.0.6) - Radix dropdown primitives.
- `@chakra-ui/react` (2.8.2) - Composable design system with theming.
- `antd` (5.15.5) - Ant Design component library.
- `daisyui` (4.10.2) - Tailwind-based component presets.
- `class-variance-authority` (0.7.0) - Variant-based class composition.
- `tailwind-merge` (1.14.0) - Utility to merge Tailwind classes safely.
- `clsx` (1.2.1) - Conditional className helper.
- `lucide-react` (0.180.0) - Icon set for React applications.
- `@heroicons/react` (2.1.2) - Heroicons SVG React components.
- `@fontsource-variable/inter` (5.2.8) - Variable Inter font pairings for prototypes.
- `@fontsource/inter` (5.2.8) - Static Inter font weights for Tailwind.
- `framer-motion` (11.0.12) - Animation and gesture library for React.

## Networking & APIs

HTTP clients and GraphQL tooling for client-only integrations.

- `axios` (1.4.0) - Promise-based HTTP client for browsers.
- `ky` (1.0.0) - Fetch wrapper with sane defaults.
- `graphql-request` (7.1.1) - Lightweight GraphQL client.
- `@apollo/client` (3.9.9) - Apollo GraphQL client with caching.
- `graphql` (16.8.1) - Reference GraphQL implementation for client-side schemas.

## Routing & Multi-Platform Frameworks

Optional frameworks when prototypes need alternative runtimes.

- `@tanstack/react-router` (1.29.1) - Type-safe router alternative for React.
- `@remix-run/router` (1.18.0) - Remix-style router utilities.
- `next` (14.2.0) - Next.js for hybrid/static site demos.
- `expo` (50.0.6) - React Native + Expo scaffolding for mobile concepts.
- `@sveltejs/kit` (2.5.3) - SvelteKit application framework.
- `astro` (4.5.1) - Island architecture web framework.
- `vue` (3.4.21) - Vue 3 runtime for component experiments.
- `solid-js` (1.8.16) - SolidJS reactive UI library.

## Build & Tooling

Core build, type-checking, and linting dependencies.

- `vite` (7.1.9) - Vite dev server and bundler.
- `@vitejs/plugin-react` (5.0.4) - React plugin for Vite.
- `typescript` (5.6.3) - TypeScript compiler.
- `@types/node` (24.7.2) - Type definitions for Node.js APIs.
- `@types/react` (18.3.5) - Type definitions for React.
- `@types/react-dom` (18.3.0) - Type definitions for React DOM.
- `@biomejs/biome` (1.9.4) - Biome formatter and linter.

## Analytics & Third-party Integrations

Client-side SDKs for payments, messaging, and product analytics.

- `@stripe/stripe-js` (3.4.0) - Stripe payments SDK for the browser.
- `stripe` (14.19.0) - Stripe REST helper usable in mocked environments.
- `@sendgrid/mail` (7.7.0) - SendGrid email helper for mocked flows.
- `mixpanel-browser` (2.51.0) - Mixpanel browser analytics SDK.
- `posthog-js` (1.89.3) - PostHog analytics client.
- `analytics` (0.12.16) - Segment-style analytics abstraction.

## Authentication & Security

Client utilities for auth flows, token handling, and password helpers.

- `jsonwebtoken` (9.0.2) - JWT encode/decode helper (mock use only).
- `bcryptjs` (2.4.3) - Password hashing utility for demos.
- `firebase` (10.8.1) - Firebase client SDK for auth and realtime demos.
- `@supabase/supabase-js` (2.39.7) - Supabase client for auth/storage prototypes.
- `auth0-js` (9.26.4) - Auth0 SPA SDK.
- `next-auth` (4.24.5) - Auth solution for Next.js prototypes.

## Formatting & Localization

Date/time utilities and localization helpers.

- `date-fns` (3.6.0) - Functional date-fns toolkit.
- `dayjs` (1.11.10) - Lightweight date/time library.
- `luxon` (3.4.3) - Immutable date/time objects.
- `moment-timezone` (0.5.45) - Moment.js with timezone support.
- `react-intl` (6.5.5) - React internationalization utilities.

## Testing & QA

Testing frameworks and accessibility tooling wired into the template.

- `vitest` (3.2.4) - Unit test runner (Vite-native).
- `@testing-library/react` (14.2.1) - DOM testing utilities for React.
- `@testing-library/jest-dom` (6.4.3) - Custom jest-dom assertions.
- `@testing-library/react-hooks` (8.1.1) - Testing utilities for hook logic.
- `@playwright/test` (1.55.1) - Playwright end-to-end tests.
- `cypress` (13.5.0) - Cypress E2E testing framework.
- `axe-core` (4.9.1) - Accessibility auditing engine.
- `jest` (29.7.0) - Jest test runner for compatibility demos.
- `ts-jest` (29.1.1) - TypeScript transformer for Jest.
- `msw` (2.2.14) - Mock Service Worker for API simulations.

## Utilities & Miscellaneous

Handy helpers that show up across prototypes.

- `uuid` (9.0.1) - UUID generation for client-only identifiers.
- `lodash` (4.17.21) - Utility helpers for arrays/objects.
- `lodash-es` (4.17.21) - ESM build of lodash for tree-shaking.
