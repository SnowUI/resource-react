import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsMoveSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-move.svg';

export const CursorsMove: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsMoveSrc}
      alt="CursorsMove"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsMove;
