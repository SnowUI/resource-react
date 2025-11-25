import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import DolphinSrc from '@snowui-design-system/resource-base/assets/images/dolphin.jpg';

export const Dolphin: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={DolphinSrc}
      alt="Dolphin"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Dolphin;
