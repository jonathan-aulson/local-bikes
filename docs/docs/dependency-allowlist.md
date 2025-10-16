# Dependency Allowlist (Workspace Snapshot)

Only request packages listed here (or already present in `package.json`). Populate `pronto.dependency-requests.json` with names from this list; the builder worker pins the vetted versions shown in parentheses. For a grouped view of the toolchain, see `docs/supported-technologies.md` (auto-generated from this allowlist).

## UI & Styling
- `@fontsource-variable/inter` (5.2.8)
- `@fontsource/inter` (5.2.8)
- `@headlessui/react` (1.7.17)
- `@mui/material` (5.15.18)
- `@radix-ui/react-dropdown-menu` (2.0.6)
- `@chakra-ui/react` (2.8.2)
- `antd` (5.15.5)
- `daisyui` (4.10.2)
- `class-variance-authority` (0.7.0)
- `tailwind-merge` (1.14.0)
- `@dnd-kit/core` (6.1.0)
- `@dnd-kit/sortable` (8.0.1)
- `@dnd-kit/modifiers` (6.0.1)
- `tailwindcss` (3.4.13)
- `autoprefixer` (10.4.19)
- `postcss` (8.4.41)

## State & Data Utilities
- `@tanstack/react-query` (5.32.0)
- `zustand` (4.5.2)
- `redux` (4.2.1)
- `@reduxjs/toolkit` (1.9.7)
- `immer` (10.0.2)
- `react-hook-form` (7.49.2)
- `@hookform/resolvers` (3.3.4)
- `localforage` (1.10.0)
- `zod` (3.23.8)
- `yup` (1.3.3)
- `react-query-devtools` (5.32.0)

## Networking & APIs
- `axios` (1.4.0)
- `ky` (1.0.0)
- `graphql-request` (7.1.1)
- `@apollo/client` (3.9.9)
- `graphql` (16.8.1)

## Routing & Frameworks
 - `react-router-dom` (6.26.2)
- `next` (14.2.0)
- `@remix-run/router` (1.18.0)
- `expo` (50.0.6)
- `@tanstack/react-router` (1.29.1)
- `@sveltejs/kit` (2.5.3)
- `astro` (4.5.1)
- `vue` (3.4.21)
- `solid-js` (1.8.16)

## Testing & QA
 - `vitest` (3.2.4)
- `@testing-library/react` (14.2.1)
- `@testing-library/jest-dom` (6.4.3)
- `@testing-library/react-hooks` (8.1.1)
- `playwright` (1.43.1)
- `cypress` (13.5.0)
- `axe-core` (4.9.1)
- `jest` (29.7.0)
- `ts-jest` (29.1.1)

## Maps & Geo
- `mapbox-gl` (3.2.0)
- `@googlemaps/js-api-loader` (1.16.6)
- `react-leaflet` (4.3.4)
- `leaflet` (1.9.4)

## Analytics & Integrations
- `@stripe/stripe-js` (3.4.0)
- `stripe` (14.19.0)
- `@sendgrid/mail` (7.7.0)
- `mixpanel-browser` (2.51.0)
- `posthog-js` (1.89.3)
- `analytics` (0.12.16)

## Auth & Security
- `jsonwebtoken` (9.0.2)
- `bcryptjs` (2.4.3)
- `firebase` (10.8.1)
- `@supabase/supabase-js` (2.39.7)
- `auth0-js` (9.26.4)
- `next-auth` (4.24.5)

## Formatting & Localisation
- `date-fns` (3.6.0)
- `dayjs` (1.11.10)
- `luxon` (3.4.3)
- `moment-timezone` (0.5.45)
- `react-intl` (6.5.5)

## Utilities & Misc
- `lodash` (4.17.21)
- `lodash-es` (4.17.21)
- `clsx` (1.2.1)
- `uuid` (9.0.1)
- `msw` (2.2.14)
- `react-refresh` (0.14.0)
- `@heroicons/react` (2.1.2)
- `framer-motion` (11.0.12)

## Build & Tooling
- `vite` (7.1.9)
- `@vitejs/plugin-react` (5.0.4)
- `typescript` (5.6.3)
- `@types/node` (24.7.2)
- `@types/react` (18.3.5)
- `@types/react-dom` (18.3.0)
- `@biomejs/biome` (1.9.4)

> Need something not listed? Pause, discuss with the operator, and update the allowlist before retrying.
