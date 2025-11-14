import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration21Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-21.svg';

export const Illustration21: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration21Src}
      alt="Illustration21"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration21;
