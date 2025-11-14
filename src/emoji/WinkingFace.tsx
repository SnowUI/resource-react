import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import WinkingFaceSrc from '@snowui-design-system/resource-core/assets/emoji/winking-face.svg';

export const WinkingFace: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={WinkingFaceSrc}
      alt="WinkingFace"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default WinkingFace;
