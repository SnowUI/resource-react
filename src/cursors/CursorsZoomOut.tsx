import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsZoomOutSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-zoom-out.svg';
export const CursorsZoomOut: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsZoomOutSrc;
  return (
    <img
      src={CursorsZoomOutSrc}
      alt="CursorsZoomOut"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsZoomOut;