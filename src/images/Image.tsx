import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ImageSrc from '@snowui-design-system/resource-core/assets/images/image.jpg';

export const Image: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={ImageSrc}
      alt="Image"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Image;
