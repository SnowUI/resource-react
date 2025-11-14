import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeUpDownSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-up-down.svg';

export const CursorsResizeUpDown: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsResizeUpDownSrc}
      alt="CursorsResizeUpDown"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsResizeUpDown;
