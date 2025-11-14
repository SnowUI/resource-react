import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeLeftRightSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-left-right.svg';

export const CursorsResizeLeftRight: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsResizeLeftRightSrc}
      alt="CursorsResizeLeftRight"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsResizeLeftRight;
