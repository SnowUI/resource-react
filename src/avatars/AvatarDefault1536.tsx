import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarDefault1536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-default-1536.jpg';
export const AvatarDefault1536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarDefault1536Src;
  return (
    <img
      src={AvatarDefault1536Src}
      alt="AvatarDefault1536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarDefault1536;