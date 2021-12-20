module.exports = {
  displayName: 'website',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.tsx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '../../coverage/apps/website',
};
