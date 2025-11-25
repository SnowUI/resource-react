import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MediumSrc from '@snowui-design-system/resource-base/assets/logos/medium.svg';
export const Medium: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = MediumSrc;
  return (
    <img
      src={MediumSrc}
      alt="Medium"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Medium;