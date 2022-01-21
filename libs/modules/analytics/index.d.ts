/* eslint-disable import/no-unassigned-import */
import 'node';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
