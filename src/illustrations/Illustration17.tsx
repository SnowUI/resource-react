import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration17Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-17.svg';

export const Illustration17: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration17Src}
      alt="Illustration17"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration17;
