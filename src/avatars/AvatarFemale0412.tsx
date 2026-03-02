import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0412Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-12.jpg';
export const AvatarFemale0412: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0412Src;
  return (
    <img
      src={AvatarFemale0412Src}
      alt="AvatarFemale0412"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0412;