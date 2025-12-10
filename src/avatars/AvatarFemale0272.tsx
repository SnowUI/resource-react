import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0272Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-72.jpg';
export const AvatarFemale0272: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0272Src;
  return (
    <img
      src={AvatarFemale0272Src}
      alt="AvatarFemale0272"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0272;