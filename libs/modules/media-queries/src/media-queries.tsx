import { useContext, useEffect, useState } from 'react';

import {
  MediaQueriesContext,
  initMediaQueriesContext,
} from './media-queries.context';
import {
  getHeaderUserAgent,
  getIsMobileUserAgent,
  getMatchMediaEntries,
} from './media-queries.utils';

import type { ScreenNames, MediaQueries } from './media-queries.types';
import type { IncomingMessage } from 'http';
import type { FC } from 'react';

export const useMediaQueries = () => useContext(MediaQueriesContext);

export function withMediaQueriesServerSideData<Props = unknown>(
  pageResultProps: Props,
  headers: IncomingMessage['headers']
): Props & { mediaQueries: { isMobile: boolean } } {
  return {
    ...pageResultProps,
    mediaQueries: {
      isMobile: getIsMobileUserAgent(getHeaderUserAgent(headers)),
    },
  };
}

interface MediaQueriesProviderProps {
  initialData: {
    [k: string]: unknown;
    mediaQueries?: { isMobile: boolean };
  };
}
export const MediaQueriesProvider: FC<MediaQueriesProviderProps> = ({
  initialData,
  children,
}) => {
  const [mediaQueries, setMediaQueries] = useState<MediaQueries>(() =>
    initMediaQueriesContext(!initialData.mediaQueries?.isMobile ? 'lg' : 'sm')
  );

  useEffect(() => {
    const onChange =
      ([breakpoint, matchMedia]: [ScreenNames, MediaQueryList | undefined]) =>
      () => {
        setMediaQueries((mediaQueries) => ({
          ...mediaQueries,
          [breakpoint]: matchMedia?.matches || false,
        }));
      };

    getMatchMediaEntries().forEach((matchMediaEntry) => {
      matchMediaEntry[1]?.addEventListener<'change'>(
        'change',
        onChange(matchMediaEntry)
      );
    });

    return () => {
      getMatchMediaEntries().forEach((matchMediaEntry) => {
        matchMediaEntry[1]?.removeEventListener(
          'change',
          onChange(matchMediaEntry)
        );
      });
    };
  }, []);

  return (
    <MediaQueriesContext.Provider value={mediaQueries}>
      {children}
    </MediaQueriesContext.Provider>
  );
};
