import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0384Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-03-84.jpg';
export const AvatarFemale0384: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0384Src;
  return (
    <img
      src={AvatarFemale0384Src}
      alt="AvatarFemale0384"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0384;