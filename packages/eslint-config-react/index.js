module.exports = {

    env: {
        browser: true
    },

    extends: [
        "eslint:recommended",
        "@polymath_labs/eslint-config-node",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],

    plugins: [
        "@polymath_labs/react",
    ],

    rules: {
        "node/no-unsupported-features/node-builtins": "off",
        "react/react-in-jsx-scope": "off",
        "react/display-name": "off",
        "function-name/starts-with-verb": "off",

        // It would be best to disable only for tsx/jsx, but for now, turn it off completely
        // ... this is because function components become large by default
        "sonarjs/cognitive-complexity": "off",

        // Custom rules
        "@polymath_labs/react/no-inline-styles": "error",
    },

    settings: {
        react: {
            "version": "detect",
        }
    }

};