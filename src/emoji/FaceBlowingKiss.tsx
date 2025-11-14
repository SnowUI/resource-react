import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FaceBlowingKissSrc from '@snowui-design-system/resource-core/assets/emoji/face-blowing-kiss.svg';
export const FaceBlowingKiss: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = FaceBlowingKissSrc;
  return (
    <img
      src={FaceBlowingKissSrc}
      alt="FaceBlowingKiss"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default FaceBlowingKiss;