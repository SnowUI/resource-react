import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeNorthEastSouthWestSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-north-east-south-west.svg';
export const CursorsResizeNorthEastSouthWest: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsResizeNorthEastSouthWestSrc;
  return (
    <img
      src={CursorsResizeNorthEastSouthWestSrc}
      alt="CursorsResizeNorthEastSouthWest"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsResizeNorthEastSouthWest;