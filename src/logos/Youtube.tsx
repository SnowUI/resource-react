import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import YoutubeSrc from '@snowui-design-system/resource-core/assets/logos/youtube.svg';

export const Youtube: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={YoutubeSrc}
      alt="Youtube"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Youtube;
