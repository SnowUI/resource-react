import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M0 51.2C0 37.06 11.462 25.6 25.6 25.6S51.2 37.06 51.2 51.2v153.6c0 14.138-11.461 25.6-25.6 25.6S0 218.938 0 204.8z"/></> } as const;

export const Selected: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Selected.displayName = 'Selected';

export default Selected;
