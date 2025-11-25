import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import HeartArrowSrc from '@snowui-design-system/resource-base/assets/emoji/heart-arrow.svg';
export const HeartArrow: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = HeartArrowSrc;
  return (
    <img
      src={HeartArrowSrc}
      alt="HeartArrow"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default HeartArrow;