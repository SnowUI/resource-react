import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M16.91 11.216 28 8l-2.76 11.212-3.444-3.306-5.555 5.786a1 1 0 0 1-1.442 0l-4.079-4.248-5.999 6.249a1 1 0 1 1-1.442-1.386l6.72-7a1 1 0 0 1 1.442 0l4.079 4.249 4.833-5.035z" clipRule="evenodd"/></> } as const;
const meta = { collection: 'snowui', usageName: 'arrow-rise', componentName: 'ArrowRise' } as const;
const defaultViewBox = "0 0 32 32";

export const ArrowRise: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

ArrowRise.displayName = 'ArrowRise';

export default ArrowRise;
