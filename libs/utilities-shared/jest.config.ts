import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'utilities',
  preset: '../../tools/jest/preset.js',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '../../out/coverage/libs/utilities-shared',
  setupFilesAfterEnv: [],
};

export default config;
