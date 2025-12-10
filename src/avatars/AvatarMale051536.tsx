import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarMale051536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-male-05-1536.jpg';
export const AvatarMale051536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarMale051536Src;
  return (
    <img
      src={AvatarMale051536Src}
      alt="AvatarMale051536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarMale051536;