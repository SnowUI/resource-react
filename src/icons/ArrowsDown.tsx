import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M12.707 21.293 15 23.586V6a1 1 0 1 1 2 0v17.586l2.293-2.293a1 1 0 1 1 1.414 1.415l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.415"/></> } as const;
const defaultViewBox = "0 0 32 32";

export const ArrowsDown: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} viewBox={defaultViewBox} weights={weights as any} />;
});

ArrowsDown.displayName = 'ArrowsDown';

export default ArrowsDown;
