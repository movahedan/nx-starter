import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  displayName: 'website',
  preset: '../../tools/jest/preset.js',
  transform: {
    '^(?!.*\\.(js|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.tsx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '../../out/coverage/apps/website',
  setupFilesAfterEnv: [
    '../../tools/jest/setups/dom.ts',
    '../../tools/jest/setups/match-media.ts',
  ],
};

export default config;
