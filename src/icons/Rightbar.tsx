import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M176 208a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h48v160z" opacity=".2"/><path fill="currentColor" d="M160 48v160a8 8 0 0 0 16 0V48a8 8 0 0 0-16 0"/><path fill="currentColor" fillRule="evenodd" d="M24 56s0-6.627 4.686-11.314c0 0 4.687-4.686 11.314-4.686h176s6.627 0 11.314 4.686c0 0 4.686 4.687 4.686 11.314v144s0 6.627-4.686 11.314c0 0-4.687 4.686-11.314 4.686H40s-6.627 0-11.314-4.686c0 0-4.686-4.687-4.686-11.314zm16 0v144h176V56z" clipRule="evenodd"/><path fill="currentColor" d="M200 88h24a8 8 0 0 0 0-16h-24a8 8 0 0 0 0 16M200 120h24a8 8 0 0 0 0-16h-24a8 8 0 0 0 0 16M200 152h24a8 8 0 0 0 0-16h-24a8 8 0 0 0 0 16"/></> } as const;

export const Rightbar: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Rightbar.displayName = 'Rightbar';

export default Rightbar;
