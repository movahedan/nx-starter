import type { RequestInit } from 'next/dist/server/web/spec-extension/request';

export type ErrorHandler = <Data>(
  error: Error,
  ongoingRequest: { url: string; config: RequestInit }
) => Promise<Data>;
