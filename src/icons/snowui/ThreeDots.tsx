import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M8 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4M16 14a2 2 0 1 1 0 4 2 2 0 0 1 0-4M26 16a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/></> } as const;
const meta = { collection: 'snowui', usageName: 'three-dots', componentName: 'ThreeDots' } as const;
const defaultViewBox = "0 0 32 32";

export const ThreeDots: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

ThreeDots.displayName = 'ThreeDots';

export default ThreeDots;
