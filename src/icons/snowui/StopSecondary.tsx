import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M8 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"/></> } as const;
const meta = { collection: 'snowui', usageName: 'stop-secondary', componentName: 'StopSecondary' } as const;
const defaultViewBox = "0 0 32 32";

export const StopSecondary: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

StopSecondary.displayName = 'StopSecondary';

export default StopSecondary;
