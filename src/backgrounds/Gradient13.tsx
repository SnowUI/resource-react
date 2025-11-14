import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient13Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-13.jpg';

export const Gradient13: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient13Src}
      alt="Gradient13"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient13;
