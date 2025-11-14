import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Geometric03Src from '@snowui-design-system/resource-core/assets/backgrounds/geometric-03.jpg';

export const Geometric03: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Geometric03Src}
      alt="Geometric03"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Geometric03;
