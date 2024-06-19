import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
    'jsx-quotes': 'prefer-single'
  },
  react: true,
  jsonc: false,
  yaml: false,

  ignores: [
    '**/node_modules','**/dist',
  ],

  formatters: true,

  rules: {
    'unused-imports/no-unused-imports': 'off',
    'no-console': 'error',
  },
});