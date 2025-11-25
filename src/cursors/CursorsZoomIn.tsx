import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsZoomInSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-zoom-in.svg';
export const CursorsZoomIn: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsZoomInSrc;
  return (
    <img
      src={CursorsZoomInSrc}
      alt="CursorsZoomIn"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsZoomIn;