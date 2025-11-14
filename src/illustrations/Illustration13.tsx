import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration13Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-13.svg';

export const Illustration13: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration13Src}
      alt="Illustration13"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration13;
