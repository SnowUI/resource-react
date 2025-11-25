import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import LineDrawing03Src from '@snowui-design-system/resource-base/assets/illustrations/line-drawing-03.svg';
export const LineDrawing03: React.FC<BackgroundProps> = ({ width = 320, height, ...rest }) => {
  const resolvedWidth = width ?? 320;
  const imageSrc = LineDrawing03Src;
  return (
    <img
      src={LineDrawing03Src}
      alt="LineDrawing03"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default LineDrawing03;