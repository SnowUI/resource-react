import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M168 128c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24M248 128c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24" opacity=".2"/><path fill="currentColor" d="M8 128c0-13.255 10.745-24 24-24h32c13.255 0 24 10.745 24 24s-10.745 24-24 24H32c-13.255 0-24-10.745-24-24"/></> } as const;

export const SwitchPoint: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

SwitchPoint.displayName = 'SwitchPoint';

export default SwitchPoint;
