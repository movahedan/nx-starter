const jestFetchMock = require('jest-fetch-mock');

jestFetchMock.enableMocks();

beforeEach(() => {
  jestFetchMock.resetMocks();
});

afterAll(() => {
  jestFetchMock.disableMocks();
});
