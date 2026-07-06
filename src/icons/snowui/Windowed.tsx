import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M12 7a1 1 0 1 0 0 2h8a3 3 0 0 1 3 3v7.5a1 1 0 1 0 2 0V12a5 5 0 0 0-5-5z"/><path fill="currentColor" fillRule="evenodd" d="M7 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm2 0h10v10H9z" clipRule="evenodd"/></> } as const;
const meta = { collection: 'snowui', usageName: 'windowed', componentName: 'Windowed' } as const;
const defaultViewBox = "0 0 32 32";

export const Windowed: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

Windowed.displayName = 'Windowed';

export default Windowed;
