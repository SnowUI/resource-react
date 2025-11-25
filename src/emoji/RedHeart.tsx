import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import RedHeartSrc from '@snowui-design-system/resource-base/assets/emoji/red-heart.svg';
export const RedHeart: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = RedHeartSrc;
  return (
    <img
      src={RedHeartSrc}
      alt="RedHeart"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default RedHeart;