import { useEffect, useRef, useState } from 'react';

import type { MutableRefObject, DependencyList } from 'react';

export const useElementSize = <Element extends HTMLElement = HTMLElement>(
  callback: () => { width: number; height: number } = () => ({
    width: 0,
    height: 0,
  }),
  deps: DependencyList = []
) => {
  const ref = useRef<Element>(null);

  const [size, setSize] = useState({
    width: ref.current?.clientWidth || callback().width || 0,
    height: ref.current?.clientHeight || callback().height || 0,
  });

  useEffect(() => {
    const resize = () => {
      const { width = 0, height = 0 } =
        ref.current?.getBoundingClientRect() || {};

      setSize({ width, height });
    };

    resize();
    window.removeEventListener('resize', resize);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [ref, size] as [MutableRefObject<Element>, typeof size];
};
