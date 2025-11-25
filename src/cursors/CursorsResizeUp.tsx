import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsResizeUpSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-resize-up.svg';
export const CursorsResizeUp: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsResizeUpSrc;
  return (
    <img
      src={CursorsResizeUpSrc}
      alt="CursorsResizeUp"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsResizeUp;