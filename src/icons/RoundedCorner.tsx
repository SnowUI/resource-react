import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M23 8a1 1 0 0 1 1 1v4c0 6.075-4.925 11-11 11H9a1 1 0 1 1 0-2h4a9 9 0 0 0 9-9V9a1 1 0 0 1 1-1" clipRule="evenodd"/></> } as const;
const defaultViewBox = "0 0 32 32";

export const RoundedCorner: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} viewBox={defaultViewBox} weights={weights as any} />;
});

RoundedCorner.displayName = 'RoundedCorner';

export default RoundedCorner;
