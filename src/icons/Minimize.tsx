import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M6 16a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clipRule="evenodd"/></> } as const;

export const Minimize: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Minimize.displayName = 'Minimize';

export default Minimize;
