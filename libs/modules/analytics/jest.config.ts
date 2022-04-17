import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'modules/analytics',
  preset: '../../../tools/jest/preset.js',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '../../../out/coverage/libs/modules/analytics',
  setupFilesAfterEnv: ['../../../tools/jest/setups/dom.ts'],
};

export default config;
