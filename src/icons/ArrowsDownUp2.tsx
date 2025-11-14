import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M53.657 170.343a8.001 8.001 0 0 0-11.314 11.314l32 32a8 8 0 0 0 11.314 0l31.997-31.997a8 8 0 1 0-11.311-11.317L80 196.686z"/><path fill="currentColor" d="M72 48v160a8 8 0 0 0 16 0V48a8 8 0 1 0-16 0M202.339 85.653a8 8 0 1 0 11.318-11.31l-32-32a8 8 0 0 0-11.314 0l-32 32a8.001 8.001 0 0 0 11.314 11.314L176 59.314z"/><path fill="currentColor" d="M184 208V48a8 8 0 0 0-16 0v160a8 8 0 0 0 16 0"/></> } as const;

export const ArrowsDownUp2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowsDownUp2.displayName = 'ArrowsDownUp2';

export default ArrowsDownUp2;
