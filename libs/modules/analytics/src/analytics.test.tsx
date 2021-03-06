import { render } from '@testing-library/react';

import { analytics, useAnalytics } from './analytics';
import {
  prepareDataLayer,
  getDataLayerSpy,
  expectDataLayer,
} from './testing-utilities.test';

describe('Analytics', () => {
  describe('useAnalytics', () => {
    beforeAll(() => {
      prepareDataLayer();
    });

    it('should fire analytics push event on page view', async () => {
      const dataLayer = getDataLayerSpy();
      render(<PageWithAnalyticTracker />);

      expectDataLayer(dataLayer).toBePushedWith('sample', {
        data: {},
      });
    });

    it('should not fire analytics push event when ref is not attached', async () => {
      jest.spyOn(console, 'error').mockImplementation(() => undefined);
      expect(() => render(<AnalyticTrackingWrongAttachment />)).toThrowError(
        '[useAnalytics]: containerRef is not attached to any element'
      );
    });

    it('should fire analytics push event when ref is attached', async () => {
      const dataLayer = getDataLayerSpy();
      const { getByRole } = render(<AnalyticTrackingCorrectAttachment />);

      getByRole('button').click();

      expectDataLayer(dataLayer).toBePushedWith('sample', {
        data: { buttonClicked: true },
      });
    });
  });

  describe('analytics', () => {
    beforeAll(() => {
      prepareDataLayer();
    });

    it('should fire analytics push event on page view', async () => {
      const dataLayer = getDataLayerSpy();

      analytics('sample', {});

      expectDataLayer(dataLayer).toBePushedWith('sample', {
        data: {},
      });
    });
  });
});

const PageWithAnalyticTracker = () => {
  useAnalytics(
    () => ({
      eventType: 'sample',
      data: {},
    }),
    []
  );

  return null;
};

const AnalyticTrackingWrongAttachment = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useAnalytics(() => () => {}, []);

  return (
    <div>
      <button data-testid='btn' />
    </div>
  );
};

const AnalyticTrackingCorrectAttachment = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const ref = useAnalytics(
    () => (ref, analytics) => {
      ref.current
        ?.getElementsByTagName('button')
        .item(0)
        ?.addEventListener('click', () => {
          analytics('sample', { buttonClicked: true });
        });
    },
    []
  );

  return (
    <div ref={ref}>
      <button data-testid='btn' />
    </div>
  );
};
