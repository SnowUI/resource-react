import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import NintendoSrc from '@snowui-design-system/resource-core/assets/logos/nintendo.svg';
export const Nintendo: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = NintendoSrc;
  return (
    <img
      src={NintendoSrc}
      alt="Nintendo"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Nintendo;