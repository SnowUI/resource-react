import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import PinterestSrc from '@snowui-design-system/resource-core/assets/logos/pinterest.svg';

export const Pinterest: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={PinterestSrc}
      alt="Pinterest"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Pinterest;
