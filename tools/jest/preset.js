const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  testMatch: ['**/+(*.)+(test).+(ts)?(x)'],
  clearMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageReporters: ['html', 'text', 'text-summary'],
  coverageThreshold: {
		global: {
			statement: 10,
			branches: 10,
			functions: 10,
			lines: 10,
		},
	},
};
