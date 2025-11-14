import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration07Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-07.svg';

export const Illustration07: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration07Src}
      alt="Illustration07"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration07;
