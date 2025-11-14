import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeWestEastSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-west-east.svg';
export const CursorsResizeWestEast: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsResizeWestEastSrc;
  return (
    <img
      src={CursorsResizeWestEastSrc}
      alt="CursorsResizeWestEast"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsResizeWestEast;