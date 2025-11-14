import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SmilingFaceHeartsSrc from '@snowui-design-system/resource-core/assets/emoji/smiling-face-hearts.svg';

export const SmilingFaceHearts: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={SmilingFaceHeartsSrc}
      alt="SmilingFaceHearts"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default SmilingFaceHearts;
