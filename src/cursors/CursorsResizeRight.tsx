import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeRightSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-right.svg';
export const CursorsResizeRight: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsResizeRightSrc;
  return (
    <img
      src={CursorsResizeRightSrc}
      alt="CursorsResizeRight"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsResizeRight;