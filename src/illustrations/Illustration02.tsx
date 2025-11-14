import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration02Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-02.svg';

export const Illustration02: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration02Src}
      alt="Illustration02"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration02;
