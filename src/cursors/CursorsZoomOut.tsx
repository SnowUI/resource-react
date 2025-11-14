import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsZoomOutSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-zoom-out.svg';

export const CursorsZoomOut: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsZoomOutSrc}
      alt="CursorsZoomOut"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsZoomOut;
