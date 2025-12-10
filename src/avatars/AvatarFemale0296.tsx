import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0296Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-02-96.jpg';
export const AvatarFemale0296: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0296Src;
  return (
    <img
      src={AvatarFemale0296Src}
      alt="AvatarFemale0296"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0296;