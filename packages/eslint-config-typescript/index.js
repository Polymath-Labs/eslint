module.exports = {

    env: {
        "es2021": true
    },

    parser: "@typescript-eslint/parser",

    parserOptions: {
        ecmaVersion: 13,
        project: ['./tsconfig.json']
    },

    extends: [
        "eslint:recommended",
        "@polymath_labs/eslint-config-node",
        "plugin:@typescript-eslint/recommended",
    ],

    plugins: [
        "@typescript-eslint"
    ],

    rules: {
        "@typescript-eslint/explicit-function-return-type": ["error"],

        // note you must disable the base rule as it can report incorrect errors
        "no-extra-parens": "off",
        "@typescript-eslint/no-extra-parens": ["error"],

        // note you must disable the base rule as it can report incorrect errors
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": [
            "error",
            {
                ignoreEnums: true
            }
        ],

        "@typescript-eslint/restrict-plus-operands": "error",

        // note you must disable the base rule as it can report incorrect errors
        "semi": "off",
        "@typescript-eslint/semi": ["error"],

        "@typescript-eslint/no-explicit-any": "off",

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    }

};