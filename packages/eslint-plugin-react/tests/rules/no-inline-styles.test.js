const eslint = require("eslint");
const RuleTester = eslint.RuleTester;
const rule = require("../../src/rules/no-inline-styles");

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

ruleTester.run("no-inline-styles", rule, {
  valid: [
    { code: `<div className="test"></div>` },
    { code: `<Component styleProp={{ color: 'red' }} />` },
  ],

  invalid: [
    {
      code: `<div style={{ color: 'red' }}></div>`,
      errors: [{ message: "Inline styles are not allowed" }],
    },
    {
      code: `<Component style={{ backgroundColor: 'blue' }} />`,
      errors: [{ message: "Inline styles are not allowed" }]
    }
  ]
});
