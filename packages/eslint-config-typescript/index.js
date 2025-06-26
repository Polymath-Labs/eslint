import tseslint from 'typescript-eslint';
import polymathLabsNodeConfig from '@polymath_labs/eslint-config-node';

export default [
  polymathLabsNodeConfig,
  {
    name: 'polymath_labs/typescript/rules',
    files: ['**/*.{ts,tsx,cts,mts}'],
    extends: [
      tseslint.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': ['error'],

      // note you must disable the base rule as it can report incorrect errors
      // Use @stylistic/eslint-plugin instead
      // 'no-extra-parens': 'off',
      // '@typescript-eslint/no-extra-parens': ['error'],

      // note you must disable the base rule as it can report incorrect errors
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignoreEnums: true
        }
      ],

      '@typescript-eslint/restrict-plus-operands': 'error',

      // note you must disable the base rule as it can report incorrect errors
      // Use @stylistic/semi
      // 'semi': 'off',
      // '@typescript-eslint/semi': ['error'],

      '@typescript-eslint/no-explicit-any': 'off',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      '@typescript-eslint/no-empty-object-type': 'off',

      'sonarjs/function-return-type': 'off',
      'sonarjs/no-unused-vars': 'off',
    }

  }
];