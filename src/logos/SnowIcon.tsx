import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SnowIconSrc from '@snowui-design-system/resource-core/assets/logos/snow-icon.svg';
export const SnowIcon: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SnowIconSrc;
  return (
    <img
      src={SnowIconSrc}
      alt="SnowIcon"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default SnowIcon;