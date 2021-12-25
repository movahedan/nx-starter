const additionalHooks = `(${['useState'].join('|')})`;

module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:tailwind/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react-hooks/exhaustive-deps': ['error', { additionalHooks }],
    'react-hooks/rules-of-hooks': 'error',
  }
};
