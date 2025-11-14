import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="m48.93 172.258 72-136a8 8 0 0 1 14.14 0l72 136a8 8 0 0 1 .93 3.666v.078a8 8 0 0 1-7.922 7.999l-.078.001a8 8 0 0 1-7.07-4.257l-18.923-35.743H81.993L63.07 179.745a8 8 0 0 1-7.046 4.257H56a8 8 0 0 1-8-7.959v-.041c0-1.305.32-2.59.93-3.744m116.606-44.256L128 57.1l-37.537 70.902zM40 208a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16z" clipRule="evenodd"/></> } as const;

export const TextA: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

TextA.displayName = 'TextA';

export default TextA;
