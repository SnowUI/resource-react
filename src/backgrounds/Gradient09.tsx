import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient09Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-09.jpg';

export const Gradient09: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient09Src}
      alt="Gradient09"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient09;
