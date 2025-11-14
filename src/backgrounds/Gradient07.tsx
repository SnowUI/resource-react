import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient07Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-07.jpg';

export const Gradient07: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient07Src}
      alt="Gradient07"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient07;
