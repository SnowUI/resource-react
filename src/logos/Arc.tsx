import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ArcSrc from '@snowui-design-system/resource-core/assets/logos/arc.svg';
export const Arc: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = ArcSrc;
  return (
    <img
      src={ArcSrc}
      alt="Arc"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Arc;