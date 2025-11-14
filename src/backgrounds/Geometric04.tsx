import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Geometric04Src from '@snowui-design-system/resource-core/assets/backgrounds/geometric-04.jpg';

export const Geometric04: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Geometric04Src}
      alt="Geometric04"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Geometric04;
