/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import type { analyticEvent } from './_analytics';

type AnalyticEvent = typeof analyticEvent;

export const prepareDataLayer = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (<any>window).dataLayer = { push: function () {} };
};

export const getDataLayerSpy = () => {
  const dataLayerSpy = jest.spyOn((<any>window).dataLayer, 'push');

  return dataLayerSpy;
};

type ExpectDataLayer = <
  AnalyticEventType = unknown,
  AnalyticEventData = unknown
>(
  dataLayer: jest.SpyInstance<any, unknown[]>
) => ReturnType<typeof expect> & {
  toBePushedWith: (name: AnalyticEventType, data: AnalyticEventData) => void;
};

export const expectDataLayer: ExpectDataLayer = <
  AnalyticEventType = unknown,
  AnalyticEventData = unknown
>(
  dataLayer: AnalyticEventData
) => ({
  ...expect(dataLayer),
  toBePushedWith: (...props: Parameters<AnalyticEvent>): void => {
    expect(dataLayer).toBeCalledTimes(1);
    const item = {
      event: props[0] as AnalyticEventType,
      ...(props[1] as AnalyticEventData),
    };

    expect(dataLayer).toBeCalledWith(item);
  },
});

export const callEventWithGivenParameters = (
  eventFunction: (...args: any[]) => ReturnType<AnalyticEvent>,
  ...args: Parameters<AnalyticEvent>
): ReturnType<AnalyticEvent> => {
  const eventFn = jest.fn(eventFunction);

  return eventFn(...args);
};

describe('analytics test utilities', () => {
  it('analytics test utilities => dummy test', () => {
    expect(true).toBeTruthy();
  });
});
