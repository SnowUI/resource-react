import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale051536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-1536.jpg';
export const AvatarFemale051536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale051536Src;
  return (
    <img
      src={AvatarFemale051536Src}
      alt="AvatarFemale051536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale051536;