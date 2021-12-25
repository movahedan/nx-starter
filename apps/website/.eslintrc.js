const importConfig = require('../../.eslint/import.order.config');

module.exports = {
  extends: ['../../.eslintrc.json'],
  ignorePatterns: ['!**/*'],
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['./pages/**/*.{ts,tsx}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.{ts,tsx,js,jsx}'],
      extends: [
        'next',
        'next/core-web-vitals',
        '../../.eslint/react.js',
        'plugin:@nrwl/nx/react-typescript',
      ],
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
        '@next/next/no-html-link-for-pages': ['error', 'apps/website/pages'],
        'import/order': [
          'error',
          {
            ...importConfig,
            pathGroups: [
              ...importConfig.pathGroups,
              {
                pattern: '*/pages.styles/*',
                group: 'internal',
                position: 'after',
              },
            ],
          },
        ],
      },
    },
  ],
};
