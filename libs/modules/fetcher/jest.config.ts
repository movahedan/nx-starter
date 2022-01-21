import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'modules-fetcher',
  preset: '../../../jest.preset.js',
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
  coverageDirectory: '../../../coverage/libs/modules/fetcher',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
