import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration08Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-08.svg';

export const Illustration08: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration08Src}
      alt="Illustration08"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration08;
