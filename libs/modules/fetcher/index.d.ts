import 'node';
import 'jest-fetch-mock';

declare global {
  interface Error extends Error {
    apiError?: Response;
  }
}
