import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration10Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-10.svg';

export const Illustration10: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration10Src}
      alt="Illustration10"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration10;
