import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M28 16a1 1 0 0 1-1 1H7.414l7.294 7.293a1 1 0 0 1-.325 1.631 1 1 0 0 1-1.09-.216l-9-9a1 1 0 0 1 0-1.415l9-9a1 1 0 1 1 1.415 1.415L7.414 15H27a1 1 0 0 1 1 1"/></>, 'thin': <><path fill="currentColor" d="M27.5 16a.5.5 0 0 1-.5.5H6.207l8.147 8.146a.5.5 0 0 1-.708.708l-9-9a.5.5 0 0 1 0-.708l9-9a.5.5 0 1 1 .708.708L6.207 15.5H27a.5.5 0 0 1 .5.5"/></>, 'light': <><path fill="currentColor" d="M27.75 16a.75.75 0 0 1-.75.75H6.811l7.72 7.72a.75.75 0 1 1-1.06 1.06l-9-9a.75.75 0 0 1 0-1.06l9-9a.75.75 0 0 1 1.06 1.06l-7.72 7.72h20.19a.75.75 0 0 1 .75.75"/></>, 'bold': <><path fill="currentColor" d="M28.5 16a1.5 1.5 0 0 1-1.5 1.5H8.625l6.44 6.439a1.503 1.503 0 0 1-2.125 2.125l-9-9a1.5 1.5 0 0 1 0-2.125l9-9a1.502 1.502 0 1 1 2.125 2.125L8.625 14.5H27a1.5 1.5 0 0 1 1.5 1.5"/></>, 'fill': <><path fill="currentColor" d="M28 16a1 1 0 0 1-1 1H15v8a1 1 0 0 1-1.707.708l-9-9a1 1 0 0 1 0-1.415l9-9A1 1 0 0 1 15 7v8h12a1 1 0 0 1 1 1"/></>, 'duotone': <><path fill="currentColor" d="M14 7v18l-9-9z" opacity=".08"/><path fill="currentColor" d="M27 15H15V7a1.001 1.001 0 0 0-1.707-.707l-9 9a1 1 0 0 0 0 1.415l9 9A1 1 0 0 0 15 25v-8h12a1 1 0 0 0 0-2m-14 7.586L6.414 16 13 9.414z"/></> } as const;
const defaultViewBox = "0 0 32 32";

export const ArrowLeft: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} viewBox={defaultViewBox} weights={weights as any} />;
});

ArrowLeft.displayName = 'ArrowLeft';

export default ArrowLeft;
