import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration26Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-26.svg';

export const Illustration26: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration26Src}
      alt="Illustration26"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration26;
