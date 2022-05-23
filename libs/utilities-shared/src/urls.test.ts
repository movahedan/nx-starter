import { parseUrl, stringifyUrl } from './urls';

describe('routing utils', () => {
  it('parseUrl', async () => {
    const urlForTest =
      '/some-page?queryNumber=1&queryNumberArray=21&queryNumberArray=22&querystring=hello&queryBoolean=true&queryEmptyArray&queryEmptyArray&queryEmptyString';
    let { url, query } = parseUrl(urlForTest);

    expect(url).toEqual('/some-page');
    expect(query).toEqual({
      queryNumber: 1,
      queryNumberArray: [21, 22],
      querystring: 'hello',
      queryBoolean: true,
    });

    ({ url, query } = parseUrl('/some-page'));

    expect(url).toEqual('/some-page');
    expect(query).toEqual({});

    ({ url, query } = parseUrl('/some-page?query=false'));

    expect(url).toEqual('/some-page');
    expect(query).toEqual({ query: false });
  });

  it('stringifyUrl', async () => {
    let url = stringifyUrl({
      url: '/some-page?',
      query: {
        query1: 1,
        query2: [21, 22],
        query3: 3,
      },
    });
    expect(url).toEqual('/some-page?query1=1&query2=21&query2=22&query3=3');

    url = stringifyUrl({ url: '/some-page?' });
    expect(url).toEqual('/some-page');
    url = stringifyUrl({ url: '/some-page', query: {} });
    expect(url).toEqual('/some-page');
    url = stringifyUrl({ url: '/some-page?', query: {} });
    expect(url).toEqual('/some-page');
    url = stringifyUrl({ url: '/some-page?query' });
    expect(url).toEqual('/some-page');
  });
});
