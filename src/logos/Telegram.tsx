import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import TelegramSrc from '@snowui-design-system/resource-core/assets/logos/telegram.svg';

export const Telegram: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={TelegramSrc}
      alt="Telegram"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Telegram;
