import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M58.343 90.555c3.124-3.407 8.19-3.407 11.314 0L122.343 148c3.124 3.406 8.19 3.406 11.314 0l52.686-57.445c3.124-3.407 8.19-3.407 11.314 0s3.124 8.929 0 12.335l-52.686 57.446c-9.373 10.219-24.569 10.219-33.942 0L58.343 102.89c-3.124-3.406-3.124-8.929 0-12.335" clipRule="evenodd"/></>, 'thin': <><path fill="currentColor" fillRule="evenodd" d="M57.424 89.12c1.749-1.629 4.426-1.462 5.979.374l55.102 65.136c5.054 5.975 13.936 5.975 18.99 0l55.102-65.136c1.553-1.836 4.23-2.003 5.979-.373 1.75 1.63 1.909 4.438.356 6.274l-55.103 65.137c-8.424 9.957-23.234 9.957-31.658 0L57.068 95.395c-1.553-1.836-1.394-4.645.355-6.274" clipRule="evenodd"/></>, 'light': <><path fill="currentColor" fillRule="evenodd" d="M58.074 89.593a6.073 6.073 0 0 1 8.713.53l53.528 61.708a10.116 10.116 0 0 0 15.37 0l53.528-61.708a6.073 6.073 0 0 1 8.712-.53c2.549 2.315 2.781 6.307.519 8.916l-53.529 61.708c-9.001 10.377-24.829 10.377-33.831 0L57.556 98.509c-2.263-2.609-2.03-6.6.518-8.916" clipRule="evenodd"/></>, 'bold': <><path fill="currentColor" fillRule="evenodd" d="M52.24 83.31c5.214-4.808 13.198-4.32 17.833 1.088l54.78 63.929a4.11 4.11 0 0 0 6.294 0l54.78-63.929c4.635-5.409 12.619-5.896 17.833-1.088s5.684 13.09 1.049 18.499l-54.78 63.929c-11.725 13.683-32.334 13.683-44.058 0l-54.78-63.929c-4.635-5.409-4.166-13.691 1.049-18.5" clipRule="evenodd"/></>, 'fill': <><path fill="currentColor" d="M116.247 170.966 42.452 94.67C37.216 89.256 40.924 80 48.329 80h159.344c7.404 0 11.113 9.256 5.877 14.67l-73.795 76.296c-6.492 6.712-17.017 6.712-23.508 0"/></>, 'duotone': <><path fill="currentColor" d="M116.247 170.966 42.452 94.67C37.216 89.256 40.924 80 48.329 80h159.344c7.404 0 11.113 9.256 5.877 14.67l-73.795 76.296c-6.492 6.712-17.017 6.712-23.508 0" opacity=".2"/><path fill="currentColor" fillRule="evenodd" d="M36.886 101.032C26.45 90.318 33.84 72 48.6 72H207.4c14.759 0 22.15 18.318 11.714 29.032l-73.543 75.496c-9.705 9.963-25.439 9.963-35.143 0zM207.4 89.006H48.6l73.543 75.497a8.13 8.13 0 0 0 11.714 0zl5.857 6.013z" clipRule="evenodd"/></> } as const;

export const ArrowLineDown2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

ArrowLineDown2.displayName = 'ArrowLineDown2';

export default ArrowLineDown2;
