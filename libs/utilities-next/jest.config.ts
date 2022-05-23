import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'utilities-next',
  preset: '../../tools/jest/preset.js',
  transform: {
    '^(?!.*\\.(js|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.tsx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '../../out/coverage/libs/utilities-next',
  setupFilesAfterEnv: ['../../tools/jest/setups/dom.ts'],
};

export default config;
