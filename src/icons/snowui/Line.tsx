import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M16 4c.552 0 1 .512 1 1.143v21.714c0 .631-.448 1.143-1 1.143s-1-.512-1-1.143V5.143C15 4.512 15.448 4 16 4" clipRule="evenodd"/></> } as const;
const meta = { collection: 'snowui', usageName: 'line', componentName: 'Line' } as const;
const defaultViewBox = "0 0 32 32";

export const Line: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

Line.displayName = 'Line';

export default Line;
