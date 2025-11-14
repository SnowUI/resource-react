import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import InstagramSrc from '@snowui-design-system/resource-core/assets/logos/instagram.svg';

export const Instagram: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={InstagramSrc}
      alt="Instagram"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Instagram;
