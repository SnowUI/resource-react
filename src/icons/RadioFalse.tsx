import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" fillRule="evenodd" d="M128 224c53.019 0 96-42.981 96-96 0-53.02-42.981-96-96-96-53.02 0-96 42.98-96 96 0 53.019 42.98 96 96 96m0 16c61.856 0 112-50.144 112-112S189.856 16 128 16 16 66.144 16 128s50.144 112 112 112" clipRule="evenodd" opacity=".2"/></> } as const;

export const RadioFalse: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

RadioFalse.displayName = 'RadioFalse';

export default RadioFalse;
