import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GooglePlaySrc from '@snowui-design-system/resource-core/assets/logos/google-play.svg';
export const GooglePlay: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = GooglePlaySrc;
  return (
    <img
      src={GooglePlaySrc}
      alt="GooglePlay"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default GooglePlay;