import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale031536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-1536.jpg';
export const AvatarFemale031536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale031536Src;
  return (
    <img
      src={AvatarFemale031536Src}
      alt="AvatarFemale031536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale031536;