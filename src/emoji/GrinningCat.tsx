import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GrinningCatSrc from '@snowui-design-system/resource-core/assets/emoji/grinning-cat.svg';
export const GrinningCat: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = GrinningCatSrc;
  return (
    <img
      src={GrinningCatSrc}
      alt="GrinningCat"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default GrinningCat;