import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale021536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-1536.jpg';
export const AvatarFemale021536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale021536Src;
  return (
    <img
      src={AvatarFemale021536Src}
      alt="AvatarFemale021536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale021536;