import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefaultSrc from '@snowui-design-system/resource-core/assets/avatars/avatar-default.jpg';

export const AvatarDefault: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AvatarDefaultSrc}
      alt="AvatarDefault"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AvatarDefault;
