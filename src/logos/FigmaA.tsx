import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FigmaASrc from '@snowui-design-system/resource-core/assets/logos/figma-a.svg';

export const FigmaA: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={FigmaASrc}
      alt="FigmaA"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default FigmaA;
