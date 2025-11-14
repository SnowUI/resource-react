import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration15Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-15.svg';

export const Illustration15: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration15Src}
      alt="Illustration15"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration15;
