import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GooglePlaySrc from '@snowui-design-system/resource-core/assets/logos/google-play.svg';

export const GooglePlay: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={GooglePlaySrc}
      alt="GooglePlay"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default GooglePlay;
