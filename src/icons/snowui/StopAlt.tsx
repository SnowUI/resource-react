import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M10 6h12a4 4 0 0 1 4 4v1.2c.716.365 1.386.807 2 1.314V10a6 6 0 0 0-6-6H10a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h2.514a11 11 0 0 1-1.315-2H10a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4"/><path fill="currentColor" d="M21 12a9 9 0 1 0 9 9 9.02 9.02 0 0 0-9-9m3.262 11.276a.7.7 0 0 1 0 .986.71.71 0 0 1-.986 0L21 21.979l-2.276 2.284a.71.71 0 0 1-.986 0 .7.7 0 0 1 0-.986L20.022 21l-2.284-2.276a.7.7 0 0 1 .986-.986L21 20.022l2.276-2.284a.7.7 0 0 1 .986.986L21.979 21z"/></> } as const;
const meta = { collection: 'snowui', usageName: 'stop-alt', componentName: 'StopAlt' } as const;
const defaultViewBox = "0 0 32 32";

export const StopAlt: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

StopAlt.displayName = 'StopAlt';

export default StopAlt;
