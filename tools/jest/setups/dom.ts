require('@testing-library/jest-dom');

// @ts-expect-error mocking readonly variable geoLocation
global.window.navigator.geolocation = {
  clearWatch: jest.fn(),
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};
