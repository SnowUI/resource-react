import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Illustration18Src from '@snowui-design-system/resource-core/assets/illustrations/illustration-18.svg';

export const Illustration18: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Illustration18Src}
      alt="Illustration18"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Illustration18;
