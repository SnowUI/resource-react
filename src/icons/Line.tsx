import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M128 32c4.418 0 8 4.093 8 9.143v173.714c0 5.05-3.582 9.143-8 9.143s-8-4.093-8-9.143V41.143c0-5.05 3.582-9.143 8-9.143" clipRule="evenodd"/></> } as const;

export const Line: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Line.displayName = 'Line';

export default Line;
