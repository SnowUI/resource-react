import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import RedHeartSrc from '@snowui-design-system/resource-core/assets/emoji/red-heart.svg';

export const RedHeart: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={RedHeartSrc}
      alt="RedHeart"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default RedHeart;
