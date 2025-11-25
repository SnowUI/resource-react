import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import PowerPointSrc from '@snowui-design-system/resource-base/assets/logos/power-point.svg';
export const PowerPoint: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = PowerPointSrc;
  return (
    <img
      src={PowerPointSrc}
      alt="PowerPoint"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default PowerPoint;