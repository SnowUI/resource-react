import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient14Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-14.jpg';

export const Gradient14: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient14Src}
      alt="Gradient14"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient14;
