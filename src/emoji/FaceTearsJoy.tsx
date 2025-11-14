import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FaceTearsJoySrc from '@snowui-design-system/resource-core/assets/emoji/face-tears-joy.svg';

export const FaceTearsJoy: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={FaceTearsJoySrc}
      alt="FaceTearsJoy"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default FaceTearsJoy;
