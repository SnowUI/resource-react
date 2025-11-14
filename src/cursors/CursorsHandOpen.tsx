import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsHandOpenSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-hand-open.svg';
export const CursorsHandOpen: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsHandOpenSrc;
  return (
    <img
      src={CursorsHandOpenSrc}
      alt="CursorsHandOpen"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsHandOpen;