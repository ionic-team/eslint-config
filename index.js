const js = require('@eslint/js');
const ts = require('@typescript-eslint/eslint-plugin/use-at-your-own-risk/raw-plugin');
const importPlugin = require('eslint-plugin-import');
const prettier = require('eslint-config-prettier/flat');

module.exports = [
  js.configs.recommended,
  ...ts.flatConfigs['flat/recommended'],
  importPlugin.flatConfigs.typescript,
  {
    name: '@ionic/eslint-config/base-overrides',
    rules: {
      // https://eslint.org/docs/rules/
      'no-fallthrough': 'off', // https://github.com/ionic-team/eslint-config/issues/7
      'no-constant-condition': 'off',

      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': [
        'warn',
        { allowArgumentsExplicitlyTypedAsAny: true },
      ],
    },
  },
  prettier,
];
