import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M2 16a8 8 0 0 1 8-8h12a8 8 0 1 1 0 16H10a8 8 0 0 1-8-8m26 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0" clipRule="evenodd"/></> } as const;
const meta = { collection: 'snowui', usageName: 'switch-true', componentName: 'SwitchTrue' } as const;
const defaultViewBox = "0 0 32 32";

export const SwitchTrue: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

SwitchTrue.displayName = 'SwitchTrue';

export default SwitchTrue;
