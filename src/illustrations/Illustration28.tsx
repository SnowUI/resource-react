import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration28Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-28.svg';

export const Illustration28: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration28Src}
      alt="Illustration28"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration28;
