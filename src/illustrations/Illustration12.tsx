import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration12Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-12.svg';

export const Illustration12: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration12Src}
      alt="Illustration12"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration12;
