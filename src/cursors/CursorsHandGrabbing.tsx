import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsHandGrabbingSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-hand-grabbing.svg';
export const CursorsHandGrabbing: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsHandGrabbingSrc;
  return (
    <img
      src={CursorsHandGrabbingSrc}
      alt="CursorsHandGrabbing"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsHandGrabbing;