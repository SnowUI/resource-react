import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Geometric01Src from '@snowui-design-system/resource-core/assets/backgrounds/geometric-01.jpg';

export const Geometric01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Geometric01Src}
      alt="Geometric01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Geometric01;
