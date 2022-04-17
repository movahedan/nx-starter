module.exports = {
  displayName: 'ui',
  preset: '../../tools/jest/preset.js',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coverageDirectory: '../../../out/coverage/libs/ui',
  setupFilesAfterEnv: ['../../tools/jest/setups/dom.ts'],
};
