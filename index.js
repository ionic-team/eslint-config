const js = require('@eslint/js');
const ts = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-config-prettier/flat');
const importX = require('eslint-plugin-import-x');

// Keep in sync with recommended.js. Flat config ignores `--ext` and lints .js by default,
// so scoping to TypeScript (matching 0.x's `eslint --ext ts` usage) happens here.
const TS_FILES = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'];

module.exports = [
  js.configs.recommended,
  ...ts.configs['flat/recommended'],
  // Wired by hand: import-x's own TypeScript preset requires eslint-import-resolver-typescript,
  // which drags in the unmaintained eslint-plugin-import and caps ESLint at v9.
  { plugins: { 'import-x': importX }, settings: { 'import-x/resolver-next': [importX.createNodeResolver()] } },
  prettier,
  {
    rules: {
      // https://eslint.org/docs/rules/
      'no-fallthrough': 'off', // https://github.com/ionic-team/eslint-config/issues/7
      'no-constant-condition': 'off',

      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': ['warn', { 'allowArgumentsExplicitlyTypedAsAny': true }],
    },
  },
].map((config) => (config.files ? config : { ...config, files: TS_FILES }));
