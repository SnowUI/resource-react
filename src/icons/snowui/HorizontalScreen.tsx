import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M27 11H5v11h22zM5 9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2z" clipRule="evenodd"/></> } as const;
const meta = { collection: 'snowui', usageName: 'horizontal-screen', componentName: 'HorizontalScreen' } as const;
const defaultViewBox = "0 0 32 32";

export const HorizontalScreen: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

HorizontalScreen.displayName = 'HorizontalScreen';

export default HorizontalScreen;
