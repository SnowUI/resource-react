import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeUpDownSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-resize-up-down.svg';
export const CursorsResizeUpDown: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsResizeUpDownSrc;
  return (
    <img
      src={CursorsResizeUpDownSrc}
      alt="CursorsResizeUpDown"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsResizeUpDown;