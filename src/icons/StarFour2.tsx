import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M123.702 35.221c1.256-4.295 7.34-4.295 8.596 0l9.011 30.812a71.65 71.65 0 0 0 48.658 48.658l30.812 9.011c4.295 1.256 4.295 7.34 0 8.596l-30.812 9.011a71.65 71.65 0 0 0-48.658 48.658l-9.011 30.812c-1.256 4.295-7.34 4.295-8.596 0l-9.011-30.812a71.65 71.65 0 0 0-48.658-48.658l-30.812-9.011c-4.295-1.256-4.295-7.34 0-8.596l30.812-9.011a71.65 71.65 0 0 0 48.658-48.658z"/></> } as const;

export const StarFour2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

StarFour2.displayName = 'StarFour2';

export default StarFour2;
