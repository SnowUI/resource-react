import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FigmaASrc from '@snowui-design-system/resource-core/assets/logos/figma-a.svg';
export const FigmaA: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = FigmaASrc;
  return (
    <img
      src={FigmaASrc}
      alt="FigmaA"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default FigmaA;