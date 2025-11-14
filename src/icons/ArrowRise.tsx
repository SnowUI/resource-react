import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M135.278 89.724 224 64l-22.083 89.698-27.548-26.447-44.438 46.289a7.997 7.997 0 0 1-11.542 0L85.76 139.552 37.771 189.54a8 8 0 0 1-11.311.231 8 8 0 0 1-.231-11.311l53.76-56a8 8 0 0 1 11.542 0l32.629 33.988 38.666-40.277z" clipRule="evenodd"/></> } as const;

export const ArrowRise: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowRise.displayName = 'ArrowRise';

export default ArrowRise;
