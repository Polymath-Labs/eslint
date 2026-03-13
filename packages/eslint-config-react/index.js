import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import polymathLabsTsConfig from '@polymath_labs/eslint-config-typescript';
import polymathReactPlugin from '@polymath_labs/eslint-plugin-react';

export default [
    ...polymathLabsTsConfig,
    {
        name: 'polymath_labs/react/setup',
        files: ['**/*.{jsx,tsx}'],
        ...reactPlugin.configs.flat.recommended,
    },
    {
        name: 'polymath_labs/react/hooks',
        files: ['**/*.{jsx,tsx}'],
        ...reactHooks.configs.flat.recommended,
    },
    {
        name: 'polymath_labs/react/rules',
        files: ['**/*.{jsx,tsx}'],

        plugins: {
            '@polymath_labs/react': polymathReactPlugin,
        },

        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/display-name': 'off',

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
