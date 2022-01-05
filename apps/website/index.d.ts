/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
import 'node';

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare global {
  interface Error extends Error {
    apiError?: Response;
  }
}
