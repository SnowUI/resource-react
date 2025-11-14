import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import LineDrawing03Src from '@snowui-design-system/resource-core/assets/illustrations/line-drawing-03.svg';

export const LineDrawing03: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={LineDrawing03Src}
      alt="LineDrawing03"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default LineDrawing03;
