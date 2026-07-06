import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M5 7h22v18H5zM3 7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm18 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2z" clipRule="evenodd"/></> } as const;
const meta = { collection: 'snowui', usageName: 'rightbar-mode', componentName: 'RightbarMode' } as const;
const defaultViewBox = "0 0 32 32";

export const RightbarMode: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

RightbarMode.displayName = 'RightbarMode';

export default RightbarMode;
