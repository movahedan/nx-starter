const micromatch = require('micromatch');

module.exports = {
  '*.{ts,tsx}': () => ['yarn nx affected --target=type-check'],
  '*.{js,ts,tsx}': () => [
    'yarn nx affected:lint --untracked=false --fix',
    'yarn nx affected:test --untracked=false --color',
    'yarn nx affected:build --untracked=false',
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
