import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient04Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-04.jpg';

export const Gradient04: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient04Src}
      alt="Gradient04"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient04;
