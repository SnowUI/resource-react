import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M101.657 170.343 120 188.686V48a8 8 0 0 1 16 0v140.686l18.343-18.343a8 8 0 1 1 11.311 11.317l-31.997 31.997a8 8 0 0 1-11.314 0l-32-32a8 8 0 1 1 11.314-11.314"/></> } as const;

export const ArrowsDown: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowsDown.displayName = 'ArrowsDown';

export default ArrowsDown;
