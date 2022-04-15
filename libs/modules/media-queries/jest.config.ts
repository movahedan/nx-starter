import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'modules-analytics',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '../../../coverage/libs/modules/analytics',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
