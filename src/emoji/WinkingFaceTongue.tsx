import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import WinkingFaceTongueSrc from '@snowui-design-system/resource-core/assets/emoji/winking-face-tongue.svg';
export const WinkingFaceTongue: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = WinkingFaceTongueSrc;
  return (
    <img
      src={WinkingFaceTongueSrc}
      alt="WinkingFaceTongue"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default WinkingFaceTongue;