import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Gradient03Src from '@snowui-design-system/resource-core/assets/backgrounds/gradient-03.jpg';

export const Gradient03: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Gradient03Src}
      alt="Gradient03"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Gradient03;
