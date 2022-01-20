const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  testMatch: ['**/+(*.)+(test).+(ts)?(x)'],
  clearMocks: true,
};
