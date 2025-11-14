import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import TwitchSrc from '@snowui-design-system/resource-core/assets/logos/twitch.svg';
export const Twitch: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = TwitchSrc;
  return (
    <img
      src={TwitchSrc}
      alt="Twitch"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Twitch;