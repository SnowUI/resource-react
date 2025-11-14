import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsZoomInSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-zoom-in.svg';

export const CursorsZoomIn: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsZoomInSrc}
      alt="CursorsZoomIn"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsZoomIn;
