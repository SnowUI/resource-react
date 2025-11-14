import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import LemonSqueezySrc from '@snowui-design-system/resource-core/assets/logos/lemon-squeezy.svg';
export const LemonSqueezy: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = LemonSqueezySrc;
  return (
    <img
      src={LemonSqueezySrc}
      alt="LemonSqueezy"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default LemonSqueezy;