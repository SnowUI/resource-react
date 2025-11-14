import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M113.067 94.4c-10.31 0-18.667 8.357-18.667 18.667v29.866c0 10.31 8.357 18.667 18.667 18.667h29.866c10.31 0 18.667-8.357 18.667-18.667v-29.866c0-10.31-8.357-18.667-18.667-18.667zM72 113.067C72 90.387 90.386 72 113.067 72h29.866C165.614 72 184 90.386 184 113.067v29.866C184 165.614 165.614 184 142.933 184h-29.866C90.387 184 72 165.614 72 142.933z" clipRule="evenodd"/></>, 'fill': <><path fill="currentColor" d="M80 112c0-17.673 14.327-32 32-32h32c17.673 0 32 14.327 32 32v32c0 17.673-14.327 32-32 32h-32c-17.673 0-32-14.327-32-32z"/></> } as const;

export const DotSquare: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

DotSquare.displayName = 'DotSquare';

export default DotSquare;
