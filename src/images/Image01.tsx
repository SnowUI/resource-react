import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import Image01Src from '@snowui-design-system/resource-core/assets/images/image-01.svg';

export const Image01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={Image01Src}
      alt="Image01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Image01;
