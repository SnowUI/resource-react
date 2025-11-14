import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeNorthSouthSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-north-south.svg';

export const CursorsResizeNorthSouth: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsResizeNorthSouthSrc}
      alt="CursorsResizeNorthSouth"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsResizeNorthSouth;
