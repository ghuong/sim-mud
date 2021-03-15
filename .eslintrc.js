module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: ["error", 2, { "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": 0,
    "no-unused-vars": ["error", { "args": "none" }],
  }
};
