import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="m17 8.414 2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1.001 1.001 0 0 0 1.414 1.414L15 8.414V26a1 1 0 1 0 2 0z"/></> } as const;
const meta = { collection: 'snowui', usageName: 'arrows-up', componentName: 'ArrowsUp' } as const;
const defaultViewBox = "0 0 32 32";

export const ArrowsUp: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

ArrowsUp.displayName = 'ArrowsUp';

export default ArrowsUp;
