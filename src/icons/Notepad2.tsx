import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="url(#a)" d="M48 40c0-8.837 7.163-16 16-16h96l48 48v144c0 8.837-7.163 16-16 16H64c-8.837 0-16-7.163-16-16z"/><path fill="#DCCFE8" d="m208 72-48-48v32c0 8.837 7.163 16 16 16z"/><path fill="#A1A2CD" fillRule="evenodd" d="M76 104a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8zm0 24a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8zm-4 28a4 4 0 0 1 4-4h104a4 4 0 0 1 0 8H76a4 4 0 0 1-4-4m4 20a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8z" clipRule="evenodd"/><path fill="url(#b)" d="M198.794 101.657a8 8 0 0 1 11.314 0l22.627 22.627a8 8 0 0 1 0 11.314L130.912 237.421 96.971 203.48z"/><path fill="url(#c)" d="M96.97 237.422V203.48l33.942 33.942z"/><path fill="#1C1C1C" d="M96.97 237.421v-11.314l11.315 11.314z"/><path fill="url(#d)" d="M187.481 112.971h48v24h-48z" transform="rotate(45 187.481 112.971)"/><defs><linearGradient id="a" x1="128" x2="128" y1="24" y2="248" gradientUnits="userSpaceOnUse"><stop stopColor="#F1ECF7"/><stop offset="1" stopColor="#E8DEF2"/></linearGradient><linearGradient id="b" x1="221.422" x2="113.942" y1="112.971" y2="220.451" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6659"/><stop offset="1" stopColor="#FF8749"/></linearGradient><linearGradient id="c" x1="113.942" x2="96.971" y1="220.451" y2="237.422" gradientUnits="userSpaceOnUse"><stop stopColor="#FFBA9F"/><stop offset="1" stopColor="#DE8893"/></linearGradient><linearGradient id="d" x1="189.99" x2="246.559" y1="120.402" y2="120.402" gradientUnits="userSpaceOnUse"><stop stopColor="#E3DBEF"/><stop offset=".807" stopColor="#F6F1FE"/><stop offset="1" stopColor="#EADEFC"/></linearGradient></defs></> } as const;

export const Notepad2: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Notepad2.displayName = 'Notepad2';

export default Notepad2;
