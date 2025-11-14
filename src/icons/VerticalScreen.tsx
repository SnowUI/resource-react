import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M172 220V44H84v176zm16-176c0-8.837-7.163-16-16-16H84c-8.837 0-16 7.163-16 16v176c0 8.837 7.163 16 16 16h88c8.837 0 16-7.163 16-16z" clipRule="evenodd"/></> } as const;

export const VerticalScreen: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

VerticalScreen.displayName = 'VerticalScreen';

export default VerticalScreen;
