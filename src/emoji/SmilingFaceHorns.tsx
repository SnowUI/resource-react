import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SmilingFaceHornsSrc from '@snowui-design-system/resource-core/assets/emoji/smiling-face-horns.svg';
export const SmilingFaceHorns: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SmilingFaceHornsSrc;
  return (
    <img
      src={SmilingFaceHornsSrc}
      alt="SmilingFaceHorns"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default SmilingFaceHorns;