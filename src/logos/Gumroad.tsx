import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GumroadSrc from '@snowui-design-system/resource-base/assets/logos/gumroad.svg';
export const Gumroad: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = GumroadSrc;
  return (
    <img
      src={GumroadSrc}
      alt="Gumroad"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Gumroad;