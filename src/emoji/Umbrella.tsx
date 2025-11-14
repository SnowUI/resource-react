import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import UmbrellaSrc from '@snowui-design-system/resource-core/assets/emoji/umbrella.svg';

export const Umbrella: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={UmbrellaSrc}
      alt="Umbrella"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Umbrella;
