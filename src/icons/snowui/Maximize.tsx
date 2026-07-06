import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M23 9H9v14h14zM9 7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" clipRule="evenodd"/></> } as const;
const meta = { collection: 'snowui', usageName: 'maximize', componentName: 'Maximize' } as const;
const defaultViewBox = "0 0 32 32";

export const Maximize: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

Maximize.displayName = 'Maximize';

export default Maximize;
