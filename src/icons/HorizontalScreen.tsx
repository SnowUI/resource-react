import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M216 88H40v88h176zM40 72c-8.837 0-16 7.163-16 16v88c0 8.837 7.163 16 16 16h176c8.837 0 16-7.163 16-16V88c0-8.837-7.163-16-16-16z" clipRule="evenodd"/></> } as const;

export const HorizontalScreen: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

HorizontalScreen.displayName = 'HorizontalScreen';

export default HorizontalScreen;
