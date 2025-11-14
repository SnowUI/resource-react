import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration01Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-01.svg';

export const Illustration01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration01Src}
      alt="Illustration01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration01;
