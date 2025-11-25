import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import XlogoSrc from '@snowui-design-system/resource-base/assets/logos/xlogo.svg';
export const Xlogo: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = XlogoSrc;
  return (
    <img
      src={XlogoSrc}
      alt="Xlogo"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Xlogo;