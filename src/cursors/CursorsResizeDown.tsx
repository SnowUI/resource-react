import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeDownSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-down.svg';

export const CursorsResizeDown: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsResizeDownSrc}
      alt="CursorsResizeDown"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsResizeDown;
