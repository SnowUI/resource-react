import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import LineDrawing02Src from '@snowui-design-system/resource-core/assets/illustrations/line-drawing-02.svg';

export const LineDrawing02: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={LineDrawing02Src}
      alt="LineDrawing02"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default LineDrawing02;
