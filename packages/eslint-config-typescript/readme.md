# Polymath Labs Typescript ESLint

This library represents the standard ESLint configuration for any React project. If you 
are developing React using Typescript, then make sure you combine the configuration with
`@polymath_labs/eslint-config-typescript`.

## Installation

Install the library using:
`npm install -D @polymath_labs/eslint-config-typescript`

Then do the same thing and make sure you have the peer dependencies installed (look at 
packages.json for a current list).

Finally, configure eslint config file on your local matching:

```javascript
module.exports = {
    extends: [
        "@polymath_labs/eslint-config-typescript"
    ],
    root: true
};
```