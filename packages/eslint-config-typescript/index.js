import tseslint from 'typescript-eslint';
import polymathLabsNodeConfig from '@polymath_labs/eslint-config-node';

const tsFiles = ['**/*.{ts,tsx,cts,mts}'];

export default tseslint.config(
  polymathLabsNodeConfig,
  {
    name: 'polymath_labs/typescript/recommended',
    files: tsFiles,
    extends: [
      ...tseslint.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': ['error'],

      '@stylistic/no-extra-parens': ['error', 'all', { 'conditionalAssign': false }],

      // note you must disable the base rule as it can report incorrect errors
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignoreEnums: true
        }
      ],

      '@typescript-eslint/restrict-plus-operands': 'error',

      '@typescript-eslint/no-explicit-any': 'off',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      '@typescript-eslint/no-empty-object-type': 'off',

      'sonarjs/function-return-type': 'off',
      'sonarjs/no-unused-vars': 'off',
    }

  }
);
