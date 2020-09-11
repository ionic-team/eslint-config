# @ionic/eslint-config

Shared ESLint config used in Ionic and Capacitor projects.

## Usage

1. Remove existing `.eslintrc.*` file, if present.
1. Install `eslint` and the config.

    ```
    npm install -D eslint @ionic/eslint-config
    ```

1. Add the following to `package.json`:

    ```
    "eslintConfig": {
      "extends": "@ionic/eslint-config/recommended"
    }
    ```

:memo: you can also use the base rule set: `@ionic/eslint-config`
