import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeNorthEastSouthWestSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-north-east-south-west.svg';

export const CursorsResizeNorthEastSouthWest: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsResizeNorthEastSouthWestSrc}
      alt="CursorsResizeNorthEastSouthWest"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsResizeNorthEastSouthWest;
