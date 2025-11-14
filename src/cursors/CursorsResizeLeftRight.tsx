import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeLeftRightSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-left-right.svg';
export const CursorsResizeLeftRight: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsResizeLeftRightSrc;
  return (
    <img
      src={CursorsResizeLeftRightSrc}
      alt="CursorsResizeLeftRight"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsResizeLeftRight;