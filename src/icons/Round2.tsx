import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><circle cx="16.25" cy="16" r="14" fill="#fff"/></> } as const;
const defaultViewBox = "0 0 32 32";

export const Round2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} viewBox={defaultViewBox} weights={weights as any} />;
});

Round2.displayName = 'Round2';

export default Round2;
