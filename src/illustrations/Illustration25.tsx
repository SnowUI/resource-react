import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration25Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-25.svg';

export const Illustration25: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration25Src}
      alt="Illustration25"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration25;
