import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeWestEastSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-west-east.svg';

export const CursorsResizeWestEast: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsResizeWestEastSrc}
      alt="CursorsResizeWestEast"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsResizeWestEast;
