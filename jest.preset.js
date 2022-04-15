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
			statement: 80,
			branches: 80,
			functions: 80,
			lines: 80,
		},
	},
};
