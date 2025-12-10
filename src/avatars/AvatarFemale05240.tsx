import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale05240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-05-240.jpg';
export const AvatarFemale05240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale05240Src;
  return (
    <img
      src={AvatarFemale05240Src}
      alt="AvatarFemale05240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale05240;