import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import PowerPointSrc from '@snowui-design-system/resource-core/assets/logos/power-point.svg';

export const PowerPoint: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={PowerPointSrc}
      alt="PowerPoint"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default PowerPoint;
