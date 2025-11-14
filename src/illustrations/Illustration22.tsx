import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration22Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-22.svg';

export const Illustration22: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration22Src}
      alt="Illustration22"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration22;
