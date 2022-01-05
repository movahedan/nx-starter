module.exports = {
  displayName: 'analytics',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/analytics',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
