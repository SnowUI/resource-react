import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M165.445 58.343c3.407 3.124 3.407 8.19 0 11.314L108 122.343c-3.406 3.124-3.406 8.19 0 11.314l57.445 52.686c3.407 3.124 3.407 8.19 0 11.314s-8.929 3.124-12.335 0l-57.446-52.686c-10.219-9.373-10.219-24.569 0-33.942l57.446-52.686c3.406-3.124 8.929-3.124 12.335 0" clipRule="evenodd"/></>, 'thin': <><path fill="currentColor" fillRule="evenodd" d="M166.879 57.424c1.63 1.749 1.463 4.426-.373 5.979l-65.136 55.102c-5.975 5.054-5.975 13.936 0 18.99l65.136 55.102c1.836 1.553 2.003 4.23.373 5.979-1.629 1.75-4.438 1.909-6.274.356l-65.136-55.103c-9.958-8.424-9.958-23.234 0-31.658l65.136-55.103c1.836-1.553 4.645-1.394 6.274.356" clipRule="evenodd"/></>, 'light': <><path fill="currentColor" fillRule="evenodd" d="M166.407 58.074a6.073 6.073 0 0 1-.53 8.713l-61.708 53.528a10.117 10.117 0 0 0 0 15.37l61.708 53.528a6.074 6.074 0 0 1 .53 8.713c-2.315 2.549-6.307 2.78-8.916.518l-61.708-53.529c-10.377-9.001-10.377-24.829 0-33.83l61.708-53.529c2.609-2.262 6.601-2.03 8.916.518" clipRule="evenodd"/></>, 'bold': <><path fill="currentColor" fillRule="evenodd" d="M172.69 52.24c4.808 5.214 4.321 13.198-1.088 17.833l-63.929 54.78a4.11 4.11 0 0 0 0 6.294l63.929 54.78c5.409 4.635 5.896 12.619 1.088 17.833s-13.09 5.684-18.499 1.049l-63.93-54.78c-13.682-11.724-13.682-32.334 0-44.058l63.93-54.78c5.409-4.635 13.691-4.165 18.499 1.049" clipRule="evenodd"/></>, 'fill': <><path fill="currentColor" d="m85.034 116.246 76.296-73.795c5.414-5.236 14.67-1.528 14.67 5.877v159.344c0 7.405-9.256 11.113-14.67 5.877l-76.296-73.795c-6.712-6.491-6.712-17.017 0-23.508"/></>, 'duotone': <><path fill="currentColor" d="m85.034 116.246 76.296-73.795c5.414-5.236 14.67-1.528 14.67 5.877v159.344c0 7.405-9.256 11.113-14.67 5.877l-76.296-73.795c-6.712-6.491-6.712-17.017 0-23.508" opacity=".2"/><path fill="currentColor" fillRule="evenodd" d="M154.968 36.885C165.682 26.45 184 33.841 184 48.6v158.8c0 14.76-18.318 22.151-29.032 11.715l-75.496-73.544c-9.962-9.704-9.962-25.438 0-35.142zM166.994 207.4V48.6l-75.497 73.543a8.13 8.13 0 0 0 0 11.714z" clipRule="evenodd"/></> } as const;

export const ArrowLineLeft2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowLineLeft2.displayName = 'ArrowLineLeft2';

export default ArrowLineLeft2;
