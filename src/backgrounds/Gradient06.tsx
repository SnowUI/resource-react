import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient06Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-06.jpg';

export const Gradient06: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient06Src}
      alt="Gradient06"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient06;
