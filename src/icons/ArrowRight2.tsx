import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M5 17h22a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2"/><path fill="currentColor" d="m25.586 16-8.293 8.293a1 1 0 0 0 1.414 1.414l9-9a1 1 0 0 0 0-1.414l-9-9a1 1 0 1 0-1.414 1.414z"/></> } as const;

export const ArrowRight2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowRight2.displayName = 'ArrowRight2';

export default ArrowRight2;
