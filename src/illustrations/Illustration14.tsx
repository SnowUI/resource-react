import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration14Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-14.svg';

export const Illustration14: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration14Src}
      alt="Illustration14"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration14;
