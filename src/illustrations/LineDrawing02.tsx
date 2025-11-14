import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import LineDrawing02Src from '@snowui-design-system/resource-core/assets/illustrations/line-drawing-02.svg';
export const LineDrawing02: React.FC<BackgroundProps> = ({ width = 320, height, ...rest }) => {
  const resolvedWidth = width ?? 320;
  const imageSrc = LineDrawing02Src;
  return (
    <img
      src={LineDrawing02Src}
      alt="LineDrawing02"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default LineDrawing02;