import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration16Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-16.svg';

export const Illustration16: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration16Src}
      alt="Illustration16"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration16;
