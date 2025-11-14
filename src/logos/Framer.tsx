import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FramerSrc from '@snowui-design-system/resource-core/assets/logos/framer.svg';

export const Framer: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={FramerSrc}
      alt="Framer"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Framer;
