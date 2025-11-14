import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsTextCursorSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-text-cursor.svg';

export const CursorsTextCursor: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsTextCursorSrc}
      alt="CursorsTextCursor"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsTextCursor;
