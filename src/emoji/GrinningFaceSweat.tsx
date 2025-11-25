import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GrinningFaceSweatSrc from '@snowui-design-system/resource-base/assets/emoji/grinning-face-sweat.svg';
export const GrinningFaceSweat: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = GrinningFaceSweatSrc;
  return (
    <img
      src={GrinningFaceSweatSrc}
      alt="GrinningFaceSweat"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default GrinningFaceSweat;