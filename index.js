const js = require('@eslint/js');
const ts = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-config-prettier/flat');
const importX = require('eslint-plugin-import-x');

const overrides = {
  rules: {
    // https://eslint.org/docs/rules/
    'no-fallthrough': 'off', // https://github.com/ionic-team/eslint-config/issues/7
    'no-constant-condition': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['warn', { 'allowArgumentsExplicitlyTypedAsAny': true }],
  },
};

// Flat config ignores `--ext`, so scope everything to TypeScript. Keep in sync with recommended.js.
const TS_FILES = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'];

module.exports = [
  js.configs.recommended,
  ...ts.configs['flat/recommended'],
  // import-x's TypeScript preset needs a resolver package whose peers cap ESLint at v9,
  // so use the resolver import-x bundles instead.
  { plugins: { 'import-x': importX }, settings: { 'import-x/resolver-next': [importX.createNodeResolver()] } },
  prettier,
  overrides,
].map((config) => (config.files ? config : { ...config, files: TS_FILES }));
