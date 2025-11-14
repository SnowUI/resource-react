import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M136 40a8 8 0 0 0-16 0v80H40a8 8 0 0 0 0 16h80v80a8 8 0 0 0 16 0v-80h80a8 8 0 0 0 0-16h-80z"/></> } as const;

export const Add: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Add.displayName = 'Add';

export default Add;
