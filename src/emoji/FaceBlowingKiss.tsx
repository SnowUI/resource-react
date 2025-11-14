import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FaceBlowingKissSrc from '@snowui-design-system/resource-core/assets/emoji/face-blowing-kiss.svg';

export const FaceBlowingKiss: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={FaceBlowingKissSrc}
      alt="FaceBlowingKiss"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default FaceBlowingKiss;
