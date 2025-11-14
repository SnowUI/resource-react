import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FigmaBSrc from '@snowui-design-system/resource-core/assets/logos/figma-b.svg';
export const FigmaB: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = FigmaBSrc;
  return (
    <img
      src={FigmaBSrc}
      alt="FigmaB"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default FigmaB;