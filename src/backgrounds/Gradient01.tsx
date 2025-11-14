import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient01Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-01.jpg';

export const Gradient01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient01Src}
      alt="Gradient01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient01;
