import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration20Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-20.svg';

export const Illustration20: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration20Src}
      alt="Illustration20"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration20;
