import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="m136 67.314 18.343 18.343a8 8 0 1 0 11.314-11.314l-32-32a8 8 0 0 0-11.314 0L90.346 74.34a8 8 0 1 0 11.31 11.317l18.344-18.343V208a8 8 0 0 0 16 0z"/></> } as const;

export const ArrowsUp: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowsUp.displayName = 'ArrowsUp';

export default ArrowsUp;
