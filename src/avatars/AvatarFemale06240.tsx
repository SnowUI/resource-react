import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale06240Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-06-240.jpg';
export const AvatarFemale06240: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale06240Src;
  return (
    <img
      src={AvatarFemale06240Src}
      alt="AvatarFemale06240"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale06240;