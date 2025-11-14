import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration19Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-19.svg';

export const Illustration19: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration19Src}
      alt="Illustration19"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration19;
