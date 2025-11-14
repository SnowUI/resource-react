import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import WinkingFaceSrc from '@snowui-design-system/resource-core/assets/emoji/winking-face.svg';
export const WinkingFace: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = WinkingFaceSrc;
  return (
    <img
      src={WinkingFaceSrc}
      alt="WinkingFace"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default WinkingFace;