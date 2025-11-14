import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration05Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-05.svg';

export const Illustration05: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration05Src}
      alt="Illustration05"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration05;
