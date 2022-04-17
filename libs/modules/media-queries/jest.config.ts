import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'modules/media-queries',
  preset: '../../../tools/jest/preset.js',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '../../../out/coverage/libs/modules/media-queries',
  setupFilesAfterEnv: [
    '../../../tools/jest/setups/dom.ts',
    '../../../tools/jest/setups/match-media.ts',
  ],
};

export default config;
