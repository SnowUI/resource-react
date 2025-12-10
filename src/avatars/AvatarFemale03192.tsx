import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale03192Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-192.jpg';
export const AvatarFemale03192: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale03192Src;
  return (
    <img
      src={AvatarFemale03192Src}
      alt="AvatarFemale03192"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale03192;