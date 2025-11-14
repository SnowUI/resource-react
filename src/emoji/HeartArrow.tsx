import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import HeartArrowSrc from '@snowui-design-system/resource-core/assets/emoji/heart-arrow.svg';

export const HeartArrow: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={HeartArrowSrc}
      alt="HeartArrow"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default HeartArrow;
