import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M0 6.4a3.2 3.2 0 1 1 6.4 0v19.2a3.2 3.2 0 0 1-6.4 0z"/></> } as const;
const defaultViewBox = "0 0 32 32";

export const Selected: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} viewBox={defaultViewBox} weights={weights as any} />;
});

Selected.displayName = 'Selected';

export default Selected;
