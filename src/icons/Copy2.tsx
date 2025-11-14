import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112z"/></>, 'thin': <><path fill="currentColor" d="M216 36H88a4 4 0 0 0-4 4v44H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4h128a4 4 0 0 0 2.828-1.172A4 4 0 0 0 172 216v-44h44a4 4 0 0 0 2.828-1.172A4 4 0 0 0 220 168V40a3.997 3.997 0 0 0-4-4m-52 176H44V92h120zm48-48h-40V88a3.997 3.997 0 0 0-4-4H92V44h120z"/></>, 'light': <><path fill="currentColor" d="M216 34H88a6 6 0 0 0-6 6v42H40a6 6 0 0 0-6 6v128a6 6 0 0 0 6 6h128a6 6 0 0 0 4.243-1.757A6 6 0 0 0 174 216v-42h42a6 6 0 0 0 4.243-1.757A6 6 0 0 0 222 168V40a6 6 0 0 0-6-6m-54 176H46V94h116zm48-48h-36V88a6 6 0 0 0-6-6H94V46h116z"/></>, 'bold': <><path fill="currentColor" d="M216 28H88a12 12 0 0 0-12 12v36H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h128c3.183 0 6.235-1.264 8.485-3.515A12 12 0 0 0 180 216v-36h36c3.183 0 6.235-1.264 8.485-3.515A12 12 0 0 0 228 168V40a12 12 0 0 0-12-12m-60 176H52V100h104zm48-48h-24V88a12 12 0 0 0-12-12h-68V52h104z"/></>, 'fill': <><path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-8 128h-32V88a8 8 0 0 0-8-8H96V48h112z"/></>, 'duotone': <><path fill="currentColor" d="M216 40v128h-48V88H88V40z" opacity=".2"/><path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112z"/></> } as const;

export const Copy2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Copy2.displayName = 'Copy2';

export default Copy2;
