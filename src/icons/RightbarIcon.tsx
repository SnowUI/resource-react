import * as React from 'react';
import IconBase from '../lib/IconBase';
import type { IconProps } from '../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M22 26a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6v20z" opacity=".08"/><path fill="currentColor" d="M20 6v20a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0"/><path fill="currentColor" d="M27 5s.828 0 1.414.586c0 0 .586.586.586 1.414v18s0 .828-.586 1.414c0 0-.586.586-1.414.586H5s-.828 0-1.414-.586c0 0-.586-.586-.586-1.414V7s0-.828.586-1.414C3.586 5.586 4.172 5 5 5zM5 7v18h22V7z"/><path fill="currentColor" d="M25 11h3a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2M25 15h3a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2M25 19h3a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2"/></> } as const;

export const RightbarIcon: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} weights={weights as any} />;
});

RightbarIcon.displayName = 'RightbarIcon';

export default RightbarIcon;
