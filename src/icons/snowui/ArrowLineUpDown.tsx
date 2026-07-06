import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M23.293 12.68a.943.943 0 0 0 1.414 0c.39-.425.39-1.115 0-1.541l-6.586-7.18c-1.171-1.278-3.07-1.278-4.242-.001l-6.586 7.18a1.16 1.16 0 0 0 0 1.543.943.943 0 0 0 1.414 0L15.293 5.5a.943.943 0 0 1 1.414 0zM8.707 19.32a.943.943 0 0 0-1.414 0 1.16 1.16 0 0 0 0 1.541l6.586 7.181c1.171 1.277 3.07 1.277 4.242 0l6.586-7.18c.39-.426.39-1.117 0-1.543a.943.943 0 0 0-1.414 0L16.707 26.5a.943.943 0 0 1-1.414 0z"/></> } as const;
const meta = { collection: 'snowui', usageName: 'arrow-line-up-down', componentName: 'ArrowLineUpDown' } as const;
const defaultViewBox = "0 0 32 32";

export const ArrowLineUpDown: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

ArrowLineUpDown.displayName = 'ArrowLineUpDown';

export default ArrowLineUpDown;
