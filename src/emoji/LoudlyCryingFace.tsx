import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import LoudlyCryingFaceSrc from '@snowui-design-system/resource-base/assets/emoji/loudly-crying-face.svg';
export const LoudlyCryingFace: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = LoudlyCryingFaceSrc;
  return (
    <img
      src={LoudlyCryingFaceSrc}
      alt="LoudlyCryingFace"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default LoudlyCryingFace;