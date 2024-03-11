module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow inline styles in JSX",
      category: "Stylistic Issues",
      recommended: false,
    },
    schema: [], // no options
  },
  create: function (context) {
    return {
      JSXAttribute(node) {
        if (node.name.name === "style") {
          context.report({
            node,
            message: "Inline styles are not allowed",
          });
        }
      },
    };
  },
};
