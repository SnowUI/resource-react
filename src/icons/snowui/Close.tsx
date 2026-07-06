import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M9.855 8.318a1.086 1.086 0 1 0-1.537 1.537L14.464 16l-6.146 6.145a1.086 1.086 0 0 0 1.537 1.537L16 17.536l6.145 6.146a1.086 1.086 0 1 0 1.537-1.537L17.536 16l6.146-6.145a1.086 1.086 0 1 0-1.537-1.537L16 14.464z"/></> } as const;
const meta = { collection: 'snowui', usageName: 'close', componentName: 'Close' } as const;
const defaultViewBox = "0 0 32 32";

export const Close: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

Close.displayName = 'Close';

export default Close;
