const importConfig = require('../../.es.import.order.js');

module.exports = {
  extends: [
    '../../.eslintrc.json',
    'next',
    'next/core-web-vitals',
    '../../.es.react.eslintrc.js',
  ],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.{ts,tsx,js,jsx}'],
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
    {
      files: ['./pages/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
