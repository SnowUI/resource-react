import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M40 136h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16"/><path fill="currentColor" d="m204.686 128-66.343 66.343a8 8 0 0 0 11.314 11.314l72-72a8 8 0 0 0 0-11.314l-72-72a8 8 0 0 0-11.314 11.314z"/></> } as const;

export const ArrowRight2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowRight2.displayName = 'ArrowRight2';

export default ArrowRight2;
