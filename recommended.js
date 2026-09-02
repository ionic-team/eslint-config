const base = require('./index');

const overrides = {
  // Keep in sync with index.js.
  files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
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

    // https://github.com/un-ts/eslint-plugin-import-x
    'import-x/first': 'error',
    'import-x/order': [
      'error',
      {
        'alphabetize': { order: 'asc', caseInsensitive: false },
        'groups': [['builtin', 'external'], 'parent', ['sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'import-x/newline-after-import': 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-mutable-exports': 'error',
  },
};

module.exports = [...base, overrides];
