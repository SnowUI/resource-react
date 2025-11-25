import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import BombSrc from '@snowui-design-system/resource-base/assets/emoji/bomb.svg';

export const Bomb: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={BombSrc}
      alt="Bomb"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Bomb;
