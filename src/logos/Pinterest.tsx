import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import PinterestSrc from '@snowui-design-system/resource-core/assets/logos/pinterest.svg';
export const Pinterest: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = PinterestSrc;
  return (
    <img
      src={PinterestSrc}
      alt="Pinterest"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Pinterest;