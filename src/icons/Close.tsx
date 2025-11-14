import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M82.745 71.431A8 8 0 1 0 71.43 82.745L116.686 128l-45.254 45.254a8 8 0 0 0 11.313 11.314L128 139.314l45.254 45.254a8 8 0 0 0 11.314-11.314L139.314 128l45.255-45.255a8 8 0 0 0-11.314-11.314L128 116.686z"/></> } as const;

export const Close: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Close.displayName = 'Close';

export default Close;
