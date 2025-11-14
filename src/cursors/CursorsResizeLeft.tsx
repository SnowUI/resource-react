import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeLeftSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-left.svg';

export const CursorsResizeLeft: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsResizeLeftSrc}
      alt="CursorsResizeLeft"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsResizeLeft;
