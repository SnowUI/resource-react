import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M212.186 43.213a8 8 0 0 1 8 8v39.233a8 8 0 0 1-16 0v-19.92l-51.537 51.537a8 8 0 0 1-11.314 0 8 8 0 0 1 0-11.313l51.538-51.537h-19.921a8 8 0 0 1 0-16z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="m39.03 111.84 77.497-77.497a8 8 0 0 1 11.313 0 8 8 0 0 1 0 11.314l-77.497 77.497a8 8 0 0 0 0 11.314l75.214 75.214a8 8 0 0 0 11.314 0l77.498-77.497a8 8 0 1 1 11.313 11.314l-77.497 77.497c-9.373 9.373-24.569 9.373-33.941 0l-75.215-75.214c-9.372-9.373-9.372-24.569 0-33.942" clipRule="evenodd"/></> } as const;

export const Goto: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Goto.displayName = 'Goto';

export default Goto;
