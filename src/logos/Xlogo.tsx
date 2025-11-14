import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import XlogoSrc from '@snowui-design-system/resource-core/assets/logos/xlogo.svg';

export const Xlogo: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={XlogoSrc}
      alt="Xlogo"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Xlogo;
