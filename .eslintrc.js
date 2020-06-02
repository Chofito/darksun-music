module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-console': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'eslintreact/jsx-props-no-spreading': 0,
    autofix: 0,
    'react/jsx-props-no-spreading': 0,
    'no-plusplus': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react-hooks/exhaustive-deps': 0,
  },
};
