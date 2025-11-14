import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Geometric02Src from '@snowui-design-system/resource-core/assets/backgrounds/geometric-02.jpg';

export const Geometric02: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Geometric02Src}
      alt="Geometric02"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Geometric02;
