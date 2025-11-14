import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="#9D9C9B" fillRule="evenodd" d="M32 22.35V233.65C32 245.994 41.85 256 54 256h148c12.15 0 22-10.006 22-22.349V58.811c0-5.97-2.351-11.693-6.529-15.89L181.183 6.458C177.064 2.321 171.505 0 165.712 0H54C41.85 0 32 10.006 32 22.35M46 233.65V22.349c0-4.488 3.582-8.127 8-8.127h109v48.762c0 8.416 6.716 15.238 15 15.238h32v155.429c0 4.488-3.582 8.127-8 8.127H54c-4.418 0-8-3.639-8-8.127M210 64v-5.19c0-2.17-.855-4.251-2.374-5.778L177 22.26v40.724c0 .561.448 1.016 1 1.016z" clipRule="evenodd"/><path fill="#C9C7C5" fillRule="evenodd" d="M64 104c0-6 2-8 8-8h112c6 0 8 2 8 8s-2 8-8 8H72c-6 0-8-2-8-8M64 136c0-6 2-8 8-8h112c6 0 8 2 8 8s-2 8-8 8H72c-6 0-8-2-8-8M64 168c0-6 2-8 8-8h112c6 0 8 2 8 8s-2 8-8 8H72c-6 0-8-2-8-8M64 200c0-6 2-8 8-8h112c6 0 8 2 8 8s-2 8-8 8H72c-6 0-8-2-8-8" clipRule="evenodd"/></> } as const;

export const Txt: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

Txt.displayName = 'Txt';

export default Txt;
