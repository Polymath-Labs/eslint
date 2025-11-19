import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import sonarjs from 'eslint-plugin-sonarjs';
import path from 'path';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import stylistic from '@stylistic/eslint-plugin';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const compat = new FlatCompat({
    baseDirectory: __dirname
});

export const Rules = {
    // Base
    'array-bracket-spacing': 'error',
    'array-callback-return': 'warn',
    'callback-return': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'consistent-return': 'error',
    'eol-last': 'off',
    'eqeqeq': 'error',
    'for-direction': 'error',
    'func-call-spacing': 'error',
    'getter-return': 'error',
    'handle-callback-err': 'error',
    'id-length': ['error', {
        'exceptions': ['_', 'id', 'ul', 'OK', 'ok', 'fs', 'in'],
        'min': 3,
    }],
    'key-spacing': 'error',
    'no-alert': 'error',
    'no-await-in-loop': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'warn',
    'no-compare-neg-zero': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'warn',
    'no-extra-boolean-cast': 'off',
    'no-extra-label': 'warn',
    'no-extra-parens': 'off', // Moved to @stylistic/eslint-plugin
    'no-fallthrough': 'off',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'warn',
    'no-loop-func': 'warn',
    'no-magic-numbers': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    'no-new-func': 'error',
    'no-new-wrappers': 'warn',
    'no-regex-spaces': 'off',
    'no-sequences': 'off',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'off',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'error',
    'no-trailing-spaces': ['error', { 'ignoreComments': true }],
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'object-curly-spacing': ['error', 'always'],
    'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'never', prev: 'import', next: 'import' }
    ],
    'prefer-arrow-callback': 'warn',
    'prefer-promise-reject-errors': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'radix': ['error', 'always'],
    'require-await': 'error',
    'semi': ['error', 'always'],
    'sort-keys': 'off',
    'space-in-parens': 'error',
    'spaced-comment': 'error',
    'valid-typeof': 'error',

    // Import
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'error',

    // Node
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-extraneous-import': 'off',

    // Perfectionist
    'perfectionist/sort-imports': 'off',

    // Promise
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-nesting': 'warn',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',

    // Stylistic
    '@stylistic/no-extra-parens': ['error', 'all', { 'conditionalAssign': false }],
    '@stylistic/lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],

    // Sonar
    'sonarjs/deprecation': 'off',
    'sonarjs/fixme-tag': 'off',
    'sonarjs/no-async-constructor': 'off',
    'sonarjs/no-nested-template-literals': 'off',
    'sonarjs/no-small-switch': 'off',
    'sonarjs/prefer-regexp-exec': 'off',
    'sonarjs/redundant-type-aliases': 'off',
    'sonarjs/todo-tag': 'off',

    // Unicorn
    'unicorn/filename-case': ['error', { 'case': 'kebabCase' }],
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-string-raw': 'error',
    'unicorn/prefer-structured-clone': 'error',
};

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
            '@stylistic': stylistic,
            import: importPlugin,
            unicorn: eslintPluginUnicorn,
        },

        rules: Rules,
    }
];