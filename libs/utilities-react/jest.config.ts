import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'utilities-react',
  preset: '../../tools/jest/preset.js',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '../../out/coverage/libs/utilities-react',
  setupFilesAfterEnv: ['../../tools/jest/setups/dom.ts'],
};

export default config;
