const baseConfig = require('./index');

module.exports = [
  ...baseConfig.slice(0, -1),
  {
    name: '@ionic/eslint-config/recommended-overrides',
    rules: {
      // ./index.js
      '@typescript-eslint/explicit-module-boundary-types': [
        'error',
        { allowArgumentsExplicitlyTypedAsAny: true },
      ],
      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      // https://github.com/benmosher/eslint-plugin-import
      'import/first': 'error',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: false },
          groups: [['builtin', 'external'], 'parent', ['sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
    },
  },
  baseConfig[baseConfig.length - 1],
];
