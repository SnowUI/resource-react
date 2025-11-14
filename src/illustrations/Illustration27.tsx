import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration27Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-27.svg';

export const Illustration27: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration27Src}
      alt="Illustration27"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration27;
