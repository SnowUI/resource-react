import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import DiscordSrc from '@snowui-design-system/resource-base/assets/logos/discord.svg';
export const Discord: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = DiscordSrc;
  return (
    <img
      src={DiscordSrc}
      alt="Discord"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Discord;