import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsMoveSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-move.svg';
export const CursorsMove: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsMoveSrc;
  return (
    <img
      src={CursorsMoveSrc}
      alt="CursorsMove"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsMove;