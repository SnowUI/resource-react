import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale041536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-1536.jpg';
export const AvatarFemale041536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale041536Src;
  return (
    <img
      src={AvatarFemale041536Src}
      alt="AvatarFemale041536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale041536;