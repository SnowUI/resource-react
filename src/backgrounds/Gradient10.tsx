import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient10Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-10.jpg';

export const Gradient10: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient10Src}
      alt="Gradient10"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient10;
