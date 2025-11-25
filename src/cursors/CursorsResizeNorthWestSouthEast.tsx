import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeNorthWestSouthEastSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-resize-north-west-south-east.svg';
export const CursorsResizeNorthWestSouthEast: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsResizeNorthWestSouthEastSrc;
  return (
    <img
      src={CursorsResizeNorthWestSouthEastSrc}
      alt="CursorsResizeNorthWestSouthEast"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsResizeNorthWestSouthEast;