import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import LineDrawing01Src from '@snowui-design-system/resource-base/assets/illustrations/line-drawing-01.svg';
export const LineDrawing01: React.FC<BackgroundProps> = ({ width = 320, height, ...rest }) => {
  const resolvedWidth = width ?? 320;
  const imageSrc = LineDrawing01Src;
  return (
    <img
      src={LineDrawing01Src}
      alt="LineDrawing01"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default LineDrawing01;