import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SmilingFaceHornsSrc from '@snowui-design-system/resource-core/assets/emoji/smiling-face-horns.svg';

export const SmilingFaceHorns: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={SmilingFaceHornsSrc}
      alt="SmilingFaceHorns"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default SmilingFaceHorns;
