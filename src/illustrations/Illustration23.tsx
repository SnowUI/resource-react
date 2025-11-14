import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration23Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-23.svg';

export const Illustration23: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration23Src}
      alt="Illustration23"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration23;
