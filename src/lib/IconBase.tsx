import * as React from 'react';
import type { IconProps, IconWeight } from './types';

type WeightsMap = Partial<Record<IconWeight, React.ReactNode>>;

export interface IconBaseProps extends IconProps {
  weights: WeightsMap;
}

const IconBase = React.forwardRef<SVGSVGElement, IconBaseProps>(function IconBase(
  { size = 24, color = 'currentColor', weight = 'regular', className, weights, viewBox, ...rest },
  ref
) {
  const content = (weights && weights[weight]) || weights?.regular;
  if (!content) return null;
  // 如果没有提供 viewBox，使用默认值（向后兼容）
  const defaultViewBox = viewBox || '0 0 256 256';
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox={defaultViewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      {content}
    </svg>
  );
});

export default IconBase;


