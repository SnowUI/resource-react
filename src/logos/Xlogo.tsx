import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import XLogoSrc from '@snowui-design-system/resource-base/assets/logos/x-logo.svg';
export const XLogo: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = XLogoSrc;
  return (
    <img
      src={XLogoSrc}
      alt="XLogo"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default XLogo;