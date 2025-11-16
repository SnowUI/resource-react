import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M21.5 27.5v-22h-11v22zm2-22a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2z" clipRule="evenodd"/></> } as const;

export const VerticalScreen: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

VerticalScreen.displayName = 'VerticalScreen';

export default VerticalScreen;
