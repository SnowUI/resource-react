import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Minimal03Src from '@snowui-design-system/resource-core/assets/backgrounds/minimal-03.jpg';

export const Minimal03: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Minimal03Src}
      alt="Minimal03"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Minimal03;
