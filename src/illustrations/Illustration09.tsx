import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration09Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-09.svg';

export const Illustration09: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration09Src}
      alt="Illustration09"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration09;
