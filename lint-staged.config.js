const micromatch = require('micromatch');
const path = require('path');

module.exports = {
  '*.{json,html,css,js,jsx,ts,tsx}': (files) => {
    // https://github.com/okonet/lint-staged#example-ignore-files-from-match
    const cwd = process.cwd();
    const relativeFiles = files.map((file) => path.relative(cwd, file));
    const notMinifiedFiles = micromatch.not(relativeFiles, ['*.min.*'], {
      matchBase: true,
    });

    return [`yarn nx format:write --files=${notMinifiedFiles.join(',')}`];
  },
  '*.{js,jsx,ts,tsx}': (files) => {
    const cwd = process.cwd();
    const relativeFiles = files.map((file) => path.relative(cwd, file));

    return [
      'yarn nx affected --target=type-check',
      `yarn nx affected:lint --fix --parallel --files=${relativeFiles.join(
        ','
      )}`,
      `yarn nx affected:test --files=${relativeFiles.join(',')}`,
    ];
  },
};
