module.exports = {
  '*.{js,jsx,ts,tsx}': () => [
    'yarn nx affected --target=type-check',
    'yarn nx affected:lint --fix --parallel',
    'yarn nx affected:test',
  ],
};
