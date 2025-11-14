import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import TwitchSrc from '@snowui-design-system/resource-core/assets/logos/twitch.svg';

export const Twitch: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={TwitchSrc}
      alt="Twitch"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Twitch;
