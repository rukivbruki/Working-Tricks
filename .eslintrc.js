module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['prettier', 'eslint-plugin-import'],
  rules: {
    'prettier/prettier': 'error',
    'max-depth': ['error', 5],
    complexity: ['error', 5],
  },
};
