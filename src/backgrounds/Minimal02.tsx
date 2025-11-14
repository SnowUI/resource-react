import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Minimal02Src from '@snowui-design-system/resource-core/assets/backgrounds/minimal-02.jpg';

export const Minimal02: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Minimal02Src}
      alt="Minimal02"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Minimal02;
