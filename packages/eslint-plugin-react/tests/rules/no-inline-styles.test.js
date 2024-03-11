const eslint = require("eslint");
const RuleTester = eslint.RuleTester;
const rule = require("../../src/rules/no-inline-styles");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015, sourceType: "module", ecmaFeatures: { jsx: true } },
});

ruleTester.run("no-inline-styles", rule, {
  valid: [
    { code: `<div className="test"></div>` },
    { code: `<Component styleProp={{ color: 'red' }} />` },
  ],

  invalid: [
    {
      code: `<div style={{ color: 'red' }}></div>`,
      errors: [{ message: "Inline styles are not allowed", type: "JSXAttribute" }],
    },
    {
      code: `<Component style={{ backgroundColor: 'blue' }} />`,
      errors: [{ message: "Inline styles are not allowed", type: "JSXAttribute" }]
    }
  ]
});
