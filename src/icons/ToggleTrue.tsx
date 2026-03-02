import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M2 16a8 8 0 0 1 8-8h12a8 8 0 1 1 0 16H10a8 8 0 0 1-8-8" opacity=".2"/><path fill="currentColor" d="M2 16a8 8 0 0 1 8-8h12a8 8 0 1 1 0 16H10a8 8 0 0 1-8-8"/><path fill="#fff" d="M28 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0"/></> } as const;
const defaultViewBox = "0 0 32 32";

export const ToggleTrue: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} viewBox={defaultViewBox} weights={weights as any} />;
});

ToggleTrue.displayName = 'ToggleTrue';

export default ToggleTrue;
