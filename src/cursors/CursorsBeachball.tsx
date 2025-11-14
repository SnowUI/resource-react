import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsBeachballSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-beachball.svg';

export const CursorsBeachball: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsBeachballSrc}
      alt="CursorsBeachball"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsBeachball;
