import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration06Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-06.svg';

export const Illustration06: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration06Src}
      alt="Illustration06"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration06;
