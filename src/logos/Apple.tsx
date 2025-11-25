import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppleSrc from '@snowui-design-system/resource-base/assets/logos/apple.svg';
export const Apple: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AppleSrc;
  return (
    <img
      src={AppleSrc}
      alt="Apple"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Apple;