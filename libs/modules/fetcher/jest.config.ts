import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'modules/fetcher',
  preset: '../../../tools/jest/preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../out/coverage/libs/modules/fetcher',
  setupFilesAfterEnv: ['../../../tools/jest/setups/fetch.ts'],
};

export default config;
