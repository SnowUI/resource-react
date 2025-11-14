import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M90.555 197.657c-3.407-3.124-3.407-8.19 0-11.314L148 133.657c3.406-3.124 3.406-8.19 0-11.314L90.555 69.657c-3.407-3.124-3.407-8.19 0-11.314s8.929-3.124 12.335 0l57.446 52.686c10.219 9.373 10.219 24.569 0 33.942l-57.446 52.686c-3.406 3.124-8.929 3.124-12.335 0" clipRule="evenodd"/></>, 'thin': <><path fill="currentColor" fillRule="evenodd" d="M89.12 198.576c-1.629-1.749-1.462-4.426.374-5.979l65.136-55.102c5.975-5.054 5.975-13.936 0-18.99L89.494 63.403c-1.836-1.553-2.003-4.23-.373-5.98s4.438-1.908 6.274-.355l65.137 55.103c9.958 8.424 9.958 23.234 0 31.658l-65.137 55.103c-1.836 1.553-4.645 1.394-6.274-.356" clipRule="evenodd"/></>, 'light': <><path fill="currentColor" fillRule="evenodd" d="M89.593 197.926a6.074 6.074 0 0 1 .53-8.713l61.708-53.528a10.116 10.116 0 0 0 0-15.37L90.123 66.787a6.073 6.073 0 0 1-.53-8.713c2.315-2.548 6.307-2.78 8.916-.518l61.708 53.529c10.377 9.001 10.377 24.829 0 33.83l-61.708 53.529c-2.609 2.263-6.6 2.031-8.916-.518" clipRule="evenodd"/></>, 'bold': <><path fill="currentColor" fillRule="evenodd" d="M83.31 203.76c-4.808-5.214-4.32-13.198 1.088-17.833l63.929-54.78a4.11 4.11 0 0 0 0-6.294l-63.929-54.78c-5.409-4.635-5.896-12.62-1.088-17.833 4.808-5.214 13.09-5.684 18.499-1.05l63.929 54.781c13.683 11.724 13.683 32.334 0 44.058l-63.929 54.78c-5.409 4.635-13.691 4.165-18.5-1.049" clipRule="evenodd"/></>, 'fill': <><path fill="currentColor" d="M170.966 139.754 94.67 213.549c-5.414 5.236-14.67 1.528-14.67-5.877V48.328c0-7.405 9.256-11.113 14.67-5.877l76.296 73.795c6.712 6.491 6.712 17.017 0 23.508"/></>, 'duotone': <><path fill="currentColor" d="M170.966 139.754 94.67 213.549c-5.414 5.236-14.67 1.528-14.67-5.877V48.328c0-7.405 9.256-11.113 14.67-5.877l76.296 73.795c6.712 6.491 6.712 17.017 0 23.508" opacity=".2"/><path fill="currentColor" fillRule="evenodd" d="M101.032 219.115C90.318 229.551 72 222.159 72 207.4V48.6c0-14.76 18.318-22.15 29.032-11.715l75.496 73.544c9.963 9.704 9.963 25.438 0 35.142zM89.006 48.6v158.8l75.497-73.543a8.13 8.13 0 0 0 0-11.714z" clipRule="evenodd"/></> } as const;

export const ArrowLineRight2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowLineRight2.displayName = 'ArrowLineRight2';

export default ArrowLineRight2;
