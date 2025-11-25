import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FaceTearsJoySrc from '@snowui-design-system/resource-base/assets/emoji/face-tears-joy.svg';
export const FaceTearsJoy: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = FaceTearsJoySrc;
  return (
    <img
      src={FaceTearsJoySrc}
      alt="FaceTearsJoy"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default FaceTearsJoy;