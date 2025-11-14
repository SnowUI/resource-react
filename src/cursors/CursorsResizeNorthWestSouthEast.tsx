import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeNorthWestSouthEastSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-north-west-south-east.svg';

export const CursorsResizeNorthWestSouthEast: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsResizeNorthWestSouthEastSrc}
      alt="CursorsResizeNorthWestSouthEast"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsResizeNorthWestSouthEast;
