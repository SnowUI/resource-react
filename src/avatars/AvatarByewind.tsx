import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarByewindSrc from '@snowui-design-system/resource-core/assets/avatars/avatar-byewind.jpg';

export const AvatarByewind: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarByewindSrc}
      alt="AvatarByewind"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarByewind;
