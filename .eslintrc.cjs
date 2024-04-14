/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["sznm/react", "plugin:react/jsx-runtime"],
  rules: {
    "no-console": [
      "error",
      {
        allow: ["info", "warn", "error"],
      },
    ],
    "import/order": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "no-param-reassign": "off",
    "no-return-assign": "off",
    "@typescript-eslint/ban-ts-comment": "off",
  },
};
