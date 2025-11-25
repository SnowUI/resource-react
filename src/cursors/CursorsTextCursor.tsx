import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsTextCursorSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-text-cursor.svg';
export const CursorsTextCursor: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsTextCursorSrc;
  return (
    <img
      src={CursorsTextCursorSrc}
      alt="CursorsTextCursor"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsTextCursor;