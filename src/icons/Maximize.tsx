import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M184 72H72v112h112zM72 56c-8.837 0-16 7.163-16 16v112c0 8.837 7.163 16 16 16h112c8.837 0 16-7.163 16-16V72c0-8.837-7.163-16-16-16z" clipRule="evenodd"/></> } as const;

export const Maximize: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Maximize.displayName = 'Maximize';

export default Maximize;
