import reactX from 'eslint-plugin-react-x';
import reactHooks from 'eslint-plugin-react-hooks';
import polymathLabsTsConfig from '@polymath_labs/eslint-config-typescript';
import polymathReactPlugin from '@polymath_labs/eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';

export default [
    ...polymathLabsTsConfig,
    {
        ...reactX.configs.recommended,
        name: 'polymath_labs/react/setup',
        files: ['**/*.{jsx,tsx}'],
        languageOptions: {
            ...reactX.configs.recommended.languageOptions,
            parserOptions: {
                ...reactX.configs.recommended.languageOptions?.parserOptions,
                ecmaFeatures: { jsx: true },
            },
        },
    },
    {
        ...reactHooks.configs.flat.recommended,
        name: 'polymath_labs/react/hooks',
        files: ['**/*.{jsx,tsx}'],
    },
    {
        name: 'polymath_labs/react/rules',
        files: ['**/*.{jsx,tsx}'],

        plugins: {
            '@polymath_labs/react': polymathReactPlugin,
            '@stylistic': stylistic,
        },

        rules: {
            // It would be best to disable only for tsx/jsx, but for now, turn it off completely
            // ... this is because function components become large by default
            'sonarjs/cognitive-complexity': 'off',
            'sonarjs/no-nested-conditional': 'off',
            'sonarjs/no-nested-functions': 'off',

            // Fixes the pre-requisite for the useless bracket rule
            "@stylistic/jsx-wrap-multilines": ["error", {
                "arrow": "ignore",
                "assignment": "ignore",
                "condition": "ignore",
                "declaration": "ignore",
                "logical": "ignore",
                "prop": "ignore",
                "return": "ignore"
            }],

            // Escalate from warn (recommended) to error
            'react-x/no-useless-fragment': 'error',

            // Custom rules
            '@polymath_labs/react/no-inline-styles': 'error',
        },

    }
];
