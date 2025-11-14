import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M184 64a8 8 0 0 1 8 8v32c0 48.601-39.399 88-88 88H72a8 8 0 0 1 0-16h32c39.764 0 72-32.235 72-72V72a8 8 0 0 1 8-8" clipRule="evenodd"/></> } as const;

export const RoundedCorner: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

RoundedCorner.displayName = 'RoundedCorner';

export default RoundedCorner;
