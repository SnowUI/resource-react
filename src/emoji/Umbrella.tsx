import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import UmbrellaSrc from '@snowui-design-system/resource-base/assets/emoji/umbrella.svg';
export const Umbrella: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = UmbrellaSrc;
  return (
    <img
      src={UmbrellaSrc}
      alt="Umbrella"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Umbrella;