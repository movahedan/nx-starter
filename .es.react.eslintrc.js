const additionalHooks = `(${['useState'].join('|')})`;

module.exports = {
  extends: [
    'plugin:@nrwl/nx/react-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwind/recommended',
  ],
  ignorePatterns: ['!**/*'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react-hooks/exhaustive-deps': ['error', { additionalHooks }],
    'react-hooks/rules-of-hooks': 'error',
  },
};
