import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Geometric06Src from '@snowui-design-system/resource-core/assets/backgrounds/geometric-06.jpg';

export const Geometric06: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Geometric06Src}
      alt="Geometric06"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Geometric06;
