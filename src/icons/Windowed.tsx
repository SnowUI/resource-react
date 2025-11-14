import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M96 56a8 8 0 1 0 0 16h64c13.255 0 24 10.745 24 24v60a8 8 0 0 0 16 0V96c0-22.091-17.909-40-40-40z"/><path fill="currentColor" fillRule="evenodd" d="M56 104c0-8.837 7.163-16 16-16h80c8.837 0 16 7.163 16 16v80c0 8.837-7.163 16-16 16H72c-8.837 0-16-7.163-16-16zm16 0h80v80H72z" clipRule="evenodd"/></> } as const;

export const Windowed: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Windowed.displayName = 'Windowed';

export default Windowed;
