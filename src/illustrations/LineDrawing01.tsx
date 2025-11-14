import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import LineDrawing01Src from '@snowui-design-system/resource-core/assets/illustrations/line-drawing-01.svg';

export const LineDrawing01: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={LineDrawing01Src}
      alt="LineDrawing01"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default LineDrawing01;
