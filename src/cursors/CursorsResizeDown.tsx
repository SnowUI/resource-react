import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeDownSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-resize-down.svg';
export const CursorsResizeDown: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsResizeDownSrc;
  return (
    <img
      src={CursorsResizeDownSrc}
      alt="CursorsResizeDown"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsResizeDown;