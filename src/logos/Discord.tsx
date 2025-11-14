import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import DiscordSrc from '@snowui-design-system/resource-core/assets/logos/discord.svg';

export const Discord: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={DiscordSrc}
      alt="Discord"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Discord;
