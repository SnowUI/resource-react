import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M17 5a1 1 0 1 0-2 0v10H5a1 1 0 1 0 0 2h10v10a1 1 0 1 0 2 0V17h10a1 1 0 1 0 0-2H17z"/></> } as const;
const defaultViewBox = "0 0 32 32";

export const Add: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} viewBox={defaultViewBox} weights={weights as any} />;
});

Add.displayName = 'Add';

export default Add;
