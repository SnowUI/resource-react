import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M186.343 101.445c3.124 3.407 8.19 3.407 11.314 0s3.124-8.929 0-12.335l-52.686-57.446c-9.373-10.219-24.569-10.219-33.942 0L58.343 89.11c-3.124 3.406-3.124 8.929 0 12.335s8.19 3.407 11.314 0L122.343 44c3.124-3.406 8.19-3.406 11.314 0zM69.657 154.555c-3.124-3.407-8.19-3.407-11.314 0s-3.124 8.929 0 12.335l52.686 57.446c9.373 10.219 24.569 10.219 33.942 0l52.686-57.446c3.124-3.406 3.124-8.929 0-12.335s-8.19-3.407-11.314 0L133.657 212c-3.124 3.406-8.19 3.406-11.314 0z"/></> } as const;

export const ArrowLineUpDown: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowLineUpDown.displayName = 'ArrowLineUpDown';

export default ArrowLineUpDown;
