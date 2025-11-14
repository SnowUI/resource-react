import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M200 128c0 39.765-32.235 72-72 72s-72-32.235-72-72 32.236-72 72-72 72 32.236 72 72" opacity=".08"/><path fill="currentColor" fillRule="evenodd" d="M128 192c35.346 0 64-28.654 64-64s-28.654-64-64-64-64 28.654-64 64 28.654 64 64 64m0 8c39.765 0 72-32.235 72-72s-32.235-72-72-72-72 32.236-72 72 32.236 72 72 72" clipRule="evenodd"/></> } as const;

export const Round: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Round.displayName = 'Round';

export default Round;
