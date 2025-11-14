import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M229.54 58.229a8 8 0 0 1 .231 11.311l-53.76 56a7.997 7.997 0 0 1-11.542 0L131.84 91.552l-38.666 40.277 27.548 26.447L32 184l22.083-89.698 27.549 26.447 44.437-46.29a8 8 0 0 1 11.542 0l32.629 33.989 47.989-49.988a8 8 0 0 1 11.311-.231" clipRule="evenodd"/></> } as const;

export const ArrowFall: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowFall.displayName = 'ArrowFall';

export default ArrowFall;
