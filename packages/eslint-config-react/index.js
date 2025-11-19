import { FlatCompat } from '@eslint/eslintrc';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import polymathLabsTsConfig from '@polymath_labs/eslint-config-typescript';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const compat = new FlatCompat({
    baseDirectory: __dirname
});

const [polymathLabsReactPlugin] = compat.plugins('@polymath_labs/react');

export default [
    polymathLabsTsConfig,
    reactPlugin.configs.flat.recommended,
    reactHooks.configs['recommended-latest'],
    {

        plugins: {
            ...polymathLabsReactPlugin.plugins,
        },

        rules: {
            'node/no-unsupported-features/node-builtins': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/display-name': 'off',
            'function-name/starts-with-verb': 'off',

            // It would be best to disable only for tsx/jsx, but for now, turn it off completely
            // ... this is because function components become large by default
            'sonarjs/cognitive-complexity': 'off',
            'sonarjs/no-nested-conditional': 'off',
            'sonarjs/no-nested-functions': 'off',

            // Fixes the pre-requisite for the useless bracket rule
            "react/jsx-wrap-multilines": ["error", {
                "arrow": "never",
                "assignment": "never",
                "condition": "never",
                "declaration": "never",
                "logical": "never",
                "prop": "never",
                "return": "never"
            }],

            // Custom rules
            '@polymath_labs/react/no-inline-styles': 'error',
        },

    }
];