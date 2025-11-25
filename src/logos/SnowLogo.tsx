import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SnowLogoSrc from '@snowui-design-system/resource-base/assets/logos/snow-logo.svg';
export const SnowLogo: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SnowLogoSrc;
  return (
    <img
      src={SnowLogoSrc}
      alt="SnowLogo"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default SnowLogo;