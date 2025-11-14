import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GrinningFaceSweatSrc from '@snowui-design-system/resource-core/assets/emoji/grinning-face-sweat.svg';

export const GrinningFaceSweat: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={GrinningFaceSweatSrc}
      alt="GrinningFaceSweat"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default GrinningFaceSweat;
