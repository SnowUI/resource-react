import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient05Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-05.jpg';

export const Gradient05: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient05Src}
      alt="Gradient05"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient05;
