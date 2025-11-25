import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FramerSrc from '@snowui-design-system/resource-base/assets/logos/framer.svg';
export const Framer: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = FramerSrc;
  return (
    <img
      src={FramerSrc}
      alt="Framer"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Framer;