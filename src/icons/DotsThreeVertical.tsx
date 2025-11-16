import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M17.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></>, 'thin': <><path fill="currentColor" d="M15 7.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 7.5a1 1 0 1 0 0 2.002A1 1 0 0 0 16 15m0 8.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></>, 'light': <><path fill="currentColor" d="M14.75 7.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0M16 14.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m0 8.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"/></>, 'bold': <><path fill="currentColor" d="M14 7.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></>, 'fill': <><path fill="currentColor" d="M24 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 24a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0-8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M16 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/></>, 'duotone': <><path fill="currentColor" d="M26 4v24a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2" opacity=".08"/><path fill="currentColor" d="M17.5 16a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></> } as const;
const defaultViewBox = "0 0 32 32";

export const DotsThreeVertical: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} viewBox={defaultViewBox} weights={weights as any} />;
});

DotsThreeVertical.displayName = 'DotsThreeVertical';

export default DotsThreeVertical;
