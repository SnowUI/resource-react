import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient08Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-08.jpg';

export const Gradient08: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient08Src}
      alt="Gradient08"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient08;
