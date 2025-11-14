import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsCrossSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-cross.svg';

export const CursorsCross: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CursorsCrossSrc}
      alt="CursorsCross"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default CursorsCross;
