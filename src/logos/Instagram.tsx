import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import InstagramSrc from '@snowui-design-system/resource-base/assets/logos/instagram.svg';
export const Instagram: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = InstagramSrc;
  return (
    <img
      src={InstagramSrc}
      alt="Instagram"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Instagram;