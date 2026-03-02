import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 8c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14" clipRule="evenodd"/></> } as const;
const defaultViewBox = "0 0 32 32";

export const Radio2true: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} viewBox={defaultViewBox} weights={weights as any} />;
});

Radio2true.displayName = 'Radio2true';

export default Radio2true;
