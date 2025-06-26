import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import sonarjs from 'eslint-plugin-sonarjs';
import path from 'path';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const compat = new FlatCompat({
    baseDirectory: __dirname
});

export default [
    perfectionist.configs['recommended-alphabetical'],
    {
        name: 'polymath_labs/node/rules',

        extends: [
            eslint.configs.recommended,
            sonarjs.configs.recommended,
            ...compat.extends(
                'plugin:promise/recommended',
            )
        ],

        plugins: {
            ...compat.plugins('promise'),
            import: importPlugin,
            unicorn: eslintPluginUnicorn,
        },

        rules: {

            // Core
            'no-console': 'error',
            'comma-dangle': ['error', 'only-multiline'],
            'id-length': ['error', { 'min': 3, 'exceptions': ['_', 'id', 'ul', 'OK', 'ok', 'fs', 'in'] }],
            'no-case-declarations': 'error',
            'no-regex-spaces': 'off',
            'no-debugger': 'error',
            'no-unused-vars': 'error',
            'array-bracket-spacing': 'error',
            'func-call-spacing': 'error',
            'key-spacing': 'error',
            'object-curly-spacing': ['error', 'always'],
            'no-const-assign': 'error',
            'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
            'space-in-parens': 'error',
            'semi': ['error', 'always'],
            'radix': ['error', 'always'],
            'spaced-comment': 'error',
            'no-duplicate-imports': 'error',
            'no-else-return': 'error',
            'no-undef': 'error',
            'no-mixed-spaces-and-tabs': 'error',
            'no-template-curly-in-string': 'warn',
            'consistent-return': 'error',
            'array-callback-return': 'warn',
            'eqeqeq': 'error',
            'no-alert': 'error',
            'no-caller': 'error',
            'no-eq-null': 'error',
            'no-eval': 'error',
            'no-extend-native': 'warn',
            'no-extra-label': 'warn',
            'no-extra-parens': ['error', 'all', { 'conditionalAssign': false }],
            'no-floating-decimal': 'error',
            'no-trailing-spaces': ['error', { 'ignoreComments': true }],
            'no-implicit-coercion': 'warn',
            'no-loop-func': 'warn',
            'no-new-func': 'error',
            'no-new-wrappers': 'warn',
            'no-throw-literal': 'error',
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: 'import', next: '*' },
                { blankLine: 'never', prev: 'import', next: 'import' }
            ],
            'prefer-promise-reject-errors': 'error',
            'for-direction': 'error',
            'getter-return': 'error',
            'no-await-in-loop': 'off',
            'no-compare-neg-zero': 'error',
            'no-catch-shadow': 'warn',
            'no-shadow-restricted-names': 'error',
            'callback-return': 'off',
            'handle-callback-err': 'error',
            'prefer-arrow-callback': 'warn',
            'prefer-template': 'error',
            'valid-typeof': 'error',
            'no-fallthrough': 'off',
            'no-magic-numbers': 'off',
            'eol-last': 'off',
            'no-extra-boolean-cast': 'off',
            'no-magic-numbers': 'off',
            'no-sequences': 'off',
            'no-shadow': 'off',
            'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
            'require-await': 'error',
            'sort-keys': 'off',

            // Import
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'import/order': 'error',

            // Node
            'node/no-unsupported-features/es-syntax': 'off',
            'node/no-missing-import': 'off',
            'node/no-unpublished-import': 'off',
            'node/no-extraneous-import': 'off', // because we use workspaces

            // Perfectionist
            'perfectionist/sort-imports': 'off',

            // Promise
            'promise/always-return': 'error',
            'promise/catch-or-return': 'error',
            'promise/no-nesting': 'warn',
            'promise/prefer-await-to-callbacks': 'error',
            'promise/prefer-await-to-then': 'error',

            // Sonar
            'sonarjs/no-async-constructor': 'off',
            'sonarjs/no-nested-template-literals': 'off',
            'sonarjs/no-small-switch': 'off',
            'sonarjs/todo-tag': 'off',

            // Unicorn
            'unicorn/filename-case': ['error', { 'case': 'kebabCase' }],
            'unicorn/no-array-for-each': 'error',
            'unicorn/no-unnecessary-await': 'error',
            'unicorn/number-literal-case': 'error',
            'unicorn/prefer-node-protocol': 'error',
            'unicorn/prefer-string-raw': 'error',
            'unicorn/prefer-structured-clone': 'error',
        },

    }
];