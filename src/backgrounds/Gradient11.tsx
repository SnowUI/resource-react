import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient11Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-11.jpg';

export const Gradient11: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient11Src}
      alt="Gradient11"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient11;
