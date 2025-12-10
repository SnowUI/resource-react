import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale04384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-384.jpg';
export const AvatarFemale04384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale04384Src;
  return (
    <img
      src={AvatarFemale04384Src}
      alt="AvatarFemale04384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale04384;