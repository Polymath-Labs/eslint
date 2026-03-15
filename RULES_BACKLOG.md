# Rules Backlog

Rules temporarily removed or degraded during the ESLint 10 migration due to upstream plugin compatibility. These should be revisited as dependencies release ESLint 10-compatible versions.

## eslint-plugin-promise

**Status:** Removed — no version supports ESLint 10 (`peerDependencies` caps at `^9.0.0`).
**Track:** [eslint-plugin-promise releases](https://github.com/eslint-community/eslint-plugin-promise/releases)

Once a compatible version is published, re-add the dependency to `packages/eslint-config-node/package.json` and restore the following rules and config in `packages/eslint-config-node/index.js`:

| Rule | Severity | Purpose |
|------|----------|---------|
| `promise/always-return` | error | Ensure `.then()` callbacks always return a value |
| `promise/catch-or-return` | error | Require `.catch()` or a return on every promise chain |
| `promise/no-nesting` | warn | Discourage nesting `.then()` inside `.then()` |
| `promise/prefer-await-to-callbacks` | error | Prefer async/await over callback patterns |
| `promise/prefer-await-to-then` | error | Prefer `await` over `.then()` chains |

Also restore `promisePlugin.configs['flat/recommended']` to the exported config array.

## eslint-plugin-react-hooks (canary)

**Status:** Using canary release `7.1.0-canary-c80a0750-20260312` — functionally identical to stable, pinned to a specific canary that adds ESLint 10 to `peerDependencies`.
**Track:** [eslint-plugin-react-hooks releases](https://github.com/facebook/react/releases)

Once a stable release ships with ESLint 10 support, update the version range in `packages/eslint-config-react/package.json` from the pinned canary to a standard semver range (e.g. `^7.1.0`).

## eslint-plugin-react → eslint-plugin-react-x

**Status:** Replaced `eslint-plugin-react` (no ESLint 10 support) with `eslint-plugin-react-x` from the [@eslint-react](https://github.com/Rel1cx/eslint-react) project. The react-x recommended config is stricter overall (37 rules vs 22), but the following rules from the original plugin have no react-x equivalent:

| Rule | Impact | Notes |
|------|--------|-------|
| `react/jsx-no-target-blank` | Medium | Prevents `target="_blank"` without `rel="noopener noreferrer"`. Modern browsers default to `noopener`, reducing risk. |
| `react/no-unknown-property` | Medium | Catches `class` instead of `className`, `for` instead of `htmlFor`, etc. TypeScript catches most of these in `.tsx` files. |
| `react/no-unescaped-entities` | Low | Catches bare `>`, `"`, `}` in JSX text. Usually surfaced by JSX parser errors. |
| `react/no-danger-with-children` | Low | Prevents using `dangerouslySetInnerHTML` and `children` on the same element. |
| `react/no-deprecated` | Low | Warns about deprecated React APIs. |
| `react/no-find-dom-node` | Low | Class component API, deprecated since React 16.3. |
| `react/no-is-mounted` | Low | Class component API, long deprecated. |
| `react/no-render-return-value` | Low | `ReactDOM.render()` return value, removed in React 18. |
| `react/require-render-return` | Low | Class component `render()` must return. |

If `eslint-plugin-react` publishes an ESLint 10-compatible version, evaluate whether to switch back or stay on react-x — the react-x plugin is actively maintained and designed for flat config.

## @stylistic/jsx-wrap-multilines

**Status:** Degraded — migrated from `react/jsx-wrap-multilines` (which supported `"never"` to disallow wrapping parens) to `@stylistic/jsx-wrap-multilines` (which only supports `"ignore"`, `"parens"`, and `"parens-new-line"`).

The original `"never"` behavior (actively disallow wrapping parens) is not available in the stylistic version. The `@stylistic/no-extra-parens` rule already catches most unnecessary parentheses around JSX expressions, so the practical impact is minimal.

No action needed unless `@stylistic/eslint-plugin` adds a `"never"` option to `jsx-wrap-multilines`.
