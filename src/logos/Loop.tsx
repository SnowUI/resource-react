import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import LoopSrc from '@snowui-design-system/resource-core/assets/logos/loop.svg';

export const Loop: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={LoopSrc}
      alt="Loop"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Loop;
