# Polymath Labs Node ESLint

This library represents the standard ESLint configuration for any Node project. Note that 
considering even React development happens using Node as far as ESLint is concerned, this 
ESLint configuration is appropriate for any .js project. 

> Tip: look for other eslint-config libs from @polymath_labs for more specialized use cases

## Installation

Install the library using:
`npm install -D @polymath_labs/eslint-config-node`

Then do the same thing and make sure you have the peer dependencies installed (look at 
packages.json for a current list).

Finally, configure eslint on your local by creating a file similar to:

```javascript
module.exports = {
    extends: [
        "@polymath_labs/eslint-config-node"
    ],
};
```