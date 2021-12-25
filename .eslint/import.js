const importConfig = require("./import.order.config")

module.exports = {
  plugins: ['import'],
  settings: {
    'import/internal-regex': '^(?:@root/)',
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'import/order': ['error', importConfig],
    'import/named': 'warn',
    'import/export': 'warn',
    'import/no-cycle': 'error',
    'import/extensions': 'off',
    'import/namespace': 'error',
    'import/group-exports': 'off',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/no-self-import': 'error',
    'import/no-default-export': 'error',
    'import/no-unused-modules': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/newline-after-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'off',
    'no-restricted-imports': "off", // nx module boundaries will handle it
    'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: ['plugin:import/typescript'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: ['apps/*/tsconfig.json', 'libs/*/tsconfig.json'],
          },
        },
      },
    },
    {
      files: ['./**/*.d.ts'],
      rules: {
        'import/no-unassigned-import': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
};