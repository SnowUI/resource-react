import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import YoutubeSrc from '@snowui-design-system/resource-base/assets/logos/youtube.svg';
export const Youtube: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = YoutubeSrc;
  return (
    <img
      src={YoutubeSrc}
      alt="Youtube"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Youtube;