const micromatch = require('micromatch');

module.exports = {
  '*.{ts,tsx}': () => ['yarn nx affected --target=type-check'],
  '*.{js,ts,tsx}': () => [
    'yarn nx affected:lint --fix',
    'yarn nx affected:test --color',
    'yarn nx affected:build',
  ],
  '*.{json,html,css,scss,less,sass,svg}': (files) => {
    // https://github.com/okonet/lint-staged#example-ignore-files-from-match
    const notMinifiedFiles = micromatch.not(files, ['*.min.*'], {
      matchBase: true,
    });

    return [
      `yarn nx affected:lint --fix --files=${notMinifiedFiles.join(',')}`,
    ];
  },
};
