import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0M31 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0" opacity=".2"/><path fill="currentColor" d="M1 16a3 3 0 0 1 3-3h4a3 3 0 1 1 0 6H4a3 3 0 0 1-3-3"/></> } as const;
const defaultViewBox = "0 0 32 32";

export const SwitchPoint: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} viewBox={defaultViewBox} weights={weights as any} />;
});

SwitchPoint.displayName = 'SwitchPoint';

export default SwitchPoint;
