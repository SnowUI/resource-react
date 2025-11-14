import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M64 80c0-8.837 7.163-16 16-16h96c8.837 0 16 7.163 16 16v96c0 8.837-7.163 16-16 16H80c-8.837 0-16-7.163-16-16z"/></> } as const;

export const Stop2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Stop2.displayName = 'Stop2';

export default Stop2;
