import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SmilingFaceHeartsSrc from '@snowui-design-system/resource-core/assets/emoji/smiling-face-hearts.svg';
export const SmilingFaceHearts: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SmilingFaceHeartsSrc;
  return (
    <img
      src={SmilingFaceHeartsSrc}
      alt="SmilingFaceHearts"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default SmilingFaceHearts;