import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration03Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-03.svg';

export const Illustration03: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration03Src}
      alt="Illustration03"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration03;
