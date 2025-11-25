import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeNorthSouthSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-resize-north-south.svg';
export const CursorsResizeNorthSouth: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsResizeNorthSouthSrc;
  return (
    <img
      src={CursorsResizeNorthSouthSrc}
      alt="CursorsResizeNorthSouth"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsResizeNorthSouth;