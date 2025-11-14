import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient12Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-12.jpg';

export const Gradient12: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient12Src}
      alt="Gradient12"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient12;
