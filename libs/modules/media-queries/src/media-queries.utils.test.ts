import { getHeaderUserAgent } from './media-queries.utils';

describe('media-queries.utils', () => {
  describe('getHeaderUserAgent', () => {
    const cases = [
      ['', undefined],
      ['', ''],
      ['Mobile', 'Mobile'],
      ['Firefox', 'Firefox'],
    ];

    test.each(cases)(
      'it should return isMobile = %p for "%p" as user-agent',
      (expectedValue, userAgent) => {
        const result = getHeaderUserAgent({
          'user-agent': userAgent as string,
        });
        expect(result).toStrictEqual(expectedValue);
      }
    );
  });
});
