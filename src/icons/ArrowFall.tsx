import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M28.693 7.279a1 1 0 0 1 .028 1.414l-6.72 7a1 1 0 0 1-1.442 0l-4.079-4.249-4.833 5.035 3.443 3.306L4 23l2.76-11.212 3.444 3.306 5.555-5.787a1 1 0 0 1 1.442 0l4.079 4.249 5.999-6.249a1 1 0 0 1 1.413-.028" clipRule="evenodd"/></> } as const;

export const ArrowFall: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowFall.displayName = 'ArrowFall';

export default ArrowFall;
