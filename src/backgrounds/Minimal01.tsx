import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Minimal01Src from '@snowui-design-system/resource-core/assets/backgrounds/minimal-01.jpg';

export const Minimal01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Minimal01Src}
      alt="Minimal01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Minimal01;
