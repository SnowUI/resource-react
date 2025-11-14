import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import WinkingFaceTongueSrc from '@snowui-design-system/resource-core/assets/emoji/winking-face-tongue.svg';

export const WinkingFaceTongue: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={WinkingFaceTongueSrc}
      alt="WinkingFaceTongue"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default WinkingFaceTongue;
