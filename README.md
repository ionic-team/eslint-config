# @ionic/eslint-config

Shared ESLint config used in Ionic and Capacitor projects.

This is meant to be used alongside Prettier (with [`@ionic/prettier-config`](https://github.com/ionic-team/prettier-config/)).

> **v1.0.0 requires ESLint 10** and a flat config file. Staying on ESLint 8 or 9? Keep using
> `@ionic/eslint-config@0.4.0`.

## Usage

1. Install `eslint` and the config:

    ```
    npm install -D eslint @ionic/eslint-config
    ```

2. Create an `eslint.config.cjs` in your project root:

    ```js
    const ionic = require('@ionic/eslint-config/recommended');

    module.exports = [
      { ignores: ['dist/**', 'build/**'] },
      ...ionic,
    ];
    ```

    From an ESM config (`eslint.config.mjs`), import `'@ionic/eslint-config/recommended.js'`.

:memo: You can also use the base rule set: `@ionic/eslint-config`

Both rule sets apply only to TypeScript files (`.ts`, `.tsx`, `.mts`, `.cts`). To lint
JavaScript too, add your own config block.

### With Prettier and `@ionic/prettier-config`

1. Set up Prettier and [`@ionic/prettier-config`](https://github.com/ionic-team/prettier-config/).
2. When using with Prettier and `@ionic/prettier-config`, ESLint should run first. Set up your scripts in `package.json` like this:

    ```json
      "scripts": {
        "lint": "npm run eslint && npm run prettier -- --check",
        "fmt": "npm run eslint -- --fix && npm run prettier -- --write",
        "prettier": "prettier \"**/*.ts\"",
        "eslint": "eslint"
      }
    ```

    - `npm run lint`: for checking if ESLint and Prettier complain
    - `npm run fmt`: attempt to autofix lint issues and autoformat code

    :memo: Not every rule in this configuration is autofixable, so `npm run fmt` may continue failing until lint issues are addressed manually.

## Migrating from 0.x

1. Delete the `eslintConfig` block from `package.json` (or any `.eslintrc` file).
2. Add an `eslint.config.cjs` as shown above.
3. Move `.eslintignore` entries into `ignores`, then delete the file.
4. Drop `--ext ts` from lint scripts; flat config ignores the flag.

New reports to expect:

- `no-unused-vars` now flags unused `catch (e)` bindings. Use `catch {}` instead.
- `no-var-requires` was renamed to `no-require-imports`. Update any disable comments.
- `import/*` rules are now [`import-x/*`](https://github.com/un-ts/eslint-plugin-import-x). Update any disable comments.
- `prefer-optional-chain` is no longer in `recommended`; it now requires
  [typed linting](https://typescript-eslint.io/getting-started/typed-linting/). Re-enable it
  in your own config if you use typed linting.

### With Husky

1. Install [husky](https://github.com/typicode/husky):

    ```
    npm install -D husky
    ```

2. Add the following to `package.json`:

    ```
      "husky": {
        "hooks": {
          "pre-commit": "npm run lint"
        }
      },
    ```
