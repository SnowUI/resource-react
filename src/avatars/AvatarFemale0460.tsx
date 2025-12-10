import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AvatarFemale0460Src from '@snowui-design-system/resource-base/assets/avatars/avatar-female-04-60.jpg';
export const AvatarFemale0460: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AvatarFemale0460Src;
  return (
    <img
      src={AvatarFemale0460Src}
      alt="AvatarFemale0460"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AvatarFemale0460;