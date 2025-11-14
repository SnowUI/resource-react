import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsHandGrabbingSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-hand-grabbing.svg';

export const CursorsHandGrabbing: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsHandGrabbingSrc}
      alt="CursorsHandGrabbing"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsHandGrabbing;
