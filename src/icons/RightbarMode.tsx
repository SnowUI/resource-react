import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M40 56h176v144H40zm-16 0c0-8.837 7.163-16 16-16h176c8.837 0 16 7.163 16 16v144c0 8.837-7.163 16-16 16H40c-8.837 0-16-7.163-16-16zm144 16c-8.837 0-16 7.163-16 16v80c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16V88c0-8.837-7.163-16-16-16z" clipRule="evenodd"/></> } as const;

export const RightbarMode: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

RightbarMode.displayName = 'RightbarMode';

export default RightbarMode;
