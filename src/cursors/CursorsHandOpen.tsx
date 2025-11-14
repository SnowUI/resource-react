import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsHandOpenSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-hand-open.svg';

export const CursorsHandOpen: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsHandOpenSrc}
      alt="CursorsHandOpen"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsHandOpen;
