import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient02Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-02.jpg';

export const Gradient02: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient02Src}
      alt="Gradient02"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient02;
