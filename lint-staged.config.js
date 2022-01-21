const micromatch = require("micromatch");
const path = require("path");

module.exports = {
  "*.{ts,tsx}": () => ["yarn nx affected --target=type-check"],
  "*.{js,ts,tsx}": () => ["yarn nx affected:lint --fix"],
  "*.{js,ts,tsx}": () => ["yarn nx affected:test --color"],
  "*.{js,ts,tsx}": () => ["yarn nx affected:build"],
  "*.{json,html,css,scss,less,sass,svg}": (files) => {
    // https://github.com/okonet/lint-staged#example-ignore-files-from-match
    const cwd = process.cwd();
    const relativeFiles = files.map((file) => path.relative(cwd, file));
    const notMinifiedFiles = micromatch.not(relativeFiles, ["*.min.*"], {
      matchBase: true,
    });

    return [`yarn nx affected:lint --fix --files=${notMinifiedFiles.join(",")}`];
  },
};
