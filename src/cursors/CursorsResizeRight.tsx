import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeRightSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-right.svg';

export const CursorsResizeRight: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsResizeRightSrc}
      alt="CursorsResizeRight"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsResizeRight;
