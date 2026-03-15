import eslint from '@eslint/js';
import sonarjs from 'eslint-plugin-sonarjs';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import stylistic from '@stylistic/eslint-plugin';
export const Rules = {
    // Base
    'array-callback-return': 'warn',
    'consistent-return': 'error',
    'eqeqeq': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'id-length': ['error', {
        'exceptions': ['_', 'id', 'ul', 'OK', 'ok', 'fs', 'in'],
        'min': 3,
    }],
    'no-alert': 'error',
    'no-await-in-loop': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
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
    'no-fallthrough': 'off',
    'no-implicit-coercion': 'warn',
    'no-loop-func': 'warn',
    'no-magic-numbers': 'off',
    'no-new-func': 'error',
    'no-new-wrappers': 'warn',
    'no-regex-spaces': 'off',
    'no-sequences': 'off',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'off',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'never', prev: 'import', next: 'import' }
    ],
    'prefer-arrow-callback': 'warn',
    'prefer-promise-reject-errors': 'error',
    'prefer-template': 'error',
    'radix': 'error',
    'require-await': 'error',
    'sort-keys': 'off',
    'valid-typeof': 'error',

    // Perfectionist
    'perfectionist/sort-imports': 'error',

    // Stylistic (includes rules migrated from deprecated ESLint core formatting rules)
    '@stylistic/array-bracket-spacing': 'error',
    '@stylistic/comma-dangle': ['error', 'only-multiline'],
    '@stylistic/eol-last': 'off',
    '@stylistic/function-call-spacing': 'error',
    '@stylistic/key-spacing': 'error',
    '@stylistic/lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    '@stylistic/no-extra-parens': ['error', 'all', { 'conditionalAssign': false }],
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    '@stylistic/no-trailing-spaces': ['error', { 'ignoreComments': true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quotes': ['error', 'single', { 'allowTemplateLiterals': 'always' }],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/space-in-parens': 'error',
    '@stylistic/spaced-comment': 'error',

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
    eslint.configs.recommended,
    sonarjs.configs.recommended,
    {
        name: 'polymath_labs/node/rules',

        plugins: {
            '@stylistic': stylistic,
            unicorn: eslintPluginUnicorn,
        },

        rules: Rules,
    }
];
