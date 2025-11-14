import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import LoudlyCryingFaceSrc from '@snowui-design-system/resource-core/assets/emoji/loudly-crying-face.svg';

export const LoudlyCryingFace: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={LoudlyCryingFaceSrc}
      alt="LoudlyCryingFace"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default LoudlyCryingFace;
