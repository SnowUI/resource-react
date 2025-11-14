import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FigmaBSrc from '@snowui-design-system/resource-core/assets/logos/figma-b.svg';

export const FigmaB: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={FigmaBSrc}
      alt="FigmaB"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default FigmaB;
