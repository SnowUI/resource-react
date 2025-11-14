import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration24Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-24.svg';

export const Illustration24: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration24Src}
      alt="Illustration24"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration24;
