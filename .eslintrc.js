module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-react', '@typescript-eslint', 'eslint-plugin-unused-imports'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: './tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    curly: ['error', 'all'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc' },
        pathGroups: [
          {
            pattern: '{react*/**,react*,react}',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'builtin', 'index'],
        'newlines-between': 'always',
      },
    ],
    'unused-imports/no-unused-imports': 'error',
    'import/no-unresolved': 'off',
    'import/export': 'off',
    'import/named': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?',
          },
          Function: {
            message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?',
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?',
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
          },
        },
      },
    ],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off', // FIXME: temporary
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-loss-of-precision': ['error'],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-shadow': [
      'off',
      {
        hoist: 'all',
      },
    ],
    '@typescript-eslint/no-unsafe-argument': 'off', // FIXME: temporary
    '@typescript-eslint/no-unsafe-assignment': 'off', // FIXME: temporary
    '@typescript-eslint/no-unsafe-call': 'off', // FIXME: temporary
    '@typescript-eslint/no-unsafe-member-access': 'off', // FIXME: temporary
    '@typescript-eslint/restrict-template-expressions': 'off', // FIXME: temporary
    '@typescript-eslint/no-unsafe-return': 'off', // FIXME: temporary
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always',
      },
    ],
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/require-await': 'off',
    complexity: 'off',
    'constructor-super': 'error',
    eqeqeq: ['error', 'smart'],
    'for-direction': 'error',
    'getter-return': 'error',
    'guard-for-in': 'error',
    'id-blacklist': 'off',
    'id-match': 'off',
    'new-parens': 'error',
    'no-async-promise-executor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'off',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'off',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'off',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'off',
    'no-misleading-character-class': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-self-assign': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'off',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'off',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-labels': 'error',
    'no-useless-catch': 'error',
    'no-useless-escape': 'error',
    'no-with': 'error',
    'object-shorthand': 'off',
    'one-var': ['error', 'never'],
    'react/jsx-boolean-value': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-bind': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'require-yield': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off',
  },
  ignorePatterns: ['build/**', 'dist/**', 'node_modules/', '/*.js'],
};
