import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeUpSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-resize-up.svg';

export const CursorsResizeUp: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsResizeUpSrc}
      alt="CursorsResizeUp"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsResizeUp;
