import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale061536Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-1536.jpg';
export const AvatarFemale061536: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale061536Src;
  return (
    <img
      src={AvatarFemale061536Src}
      alt="AvatarFemale061536"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale061536;