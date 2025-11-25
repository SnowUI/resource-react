import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeLeftSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-resize-left.svg';
export const CursorsResizeLeft: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsResizeLeftSrc;
  return (
    <img
      src={CursorsResizeLeftSrc}
      alt="CursorsResizeLeft"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsResizeLeft;