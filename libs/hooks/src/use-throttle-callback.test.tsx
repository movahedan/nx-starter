import { renderHook, act as actHook } from '@testing-library/react-hooks';

import { waitForMilliseconds } from 'test-utilities.test';

import { useThrottleCallback } from './use-throttle-callback';

describe('useThrottleCallback', () => {
  it('should throttle the callback', async () => {
    const callback = jest.fn();
    const { result } = renderHook<
      Parameters<typeof useThrottleCallback>,
      () => void
    >(() => useThrottleCallback(callback, []));

    const throttledCallback = result.current;

    await actHook(async () => {
      throttledCallback();
      throttledCallback();
      throttledCallback();

      await waitForMilliseconds(400);
    });

    expect(callback).toBeCalledTimes(1);
  });

  it('should not calling effect when it is unmounted', () => {
    const callback = jest.fn();
    const { rerender, waitFor, unmount } = renderHook(() =>
      useThrottleCallback(callback, [])
    );

    actHook(() => {
      rerender();
    });
    unmount();

    waitFor(() => {
      expect(callback).toHaveBeenCalledTimes(0);
    });
  });
});
