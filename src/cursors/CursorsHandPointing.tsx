import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsHandPointingSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-hand-pointing.svg';

export const CursorsHandPointing: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsHandPointingSrc}
      alt="CursorsHandPointing"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsHandPointing;
