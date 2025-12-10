import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale04192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-192.jpg';
export const AvatarFemale04192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale04192Src;
  return (
    <img
      src={AvatarFemale04192Src}
      alt="AvatarFemale04192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale04192;