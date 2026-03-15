# Polymath Labs eslint configurations

This repository contains a collection of ESLint configurations for various use cases, following PolyMath Labs' best practices.

Packages:

- [`@polymath_labs/eslint-config-node`](./packages/eslint-config-node/readme.md): Standard ESLint configuration for any Node project.
- [`@polymath_labs/eslint-config-react`](./packages/eslint-config-react/readme.md): Standard ESLint configuration for any React project.
- [`@polymath_labs/eslint-config-typescript`](./packages/eslint-config-typescript/readme.md): Standard ESLint configuration for any Typescript project.

## ESLint 10 Migration

All configurations target ESLint 10 with flat config. A small number of rules were temporarily removed due to upstream plugins not yet declaring ESLint 10 compatibility. See [RULES_BACKLOG.md](./RULES_BACKLOG.md) for details and tracking.