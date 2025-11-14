import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import TelegramSrc from '@snowui-design-system/resource-core/assets/logos/telegram.svg';
export const Telegram: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = TelegramSrc;
  return (
    <img
      src={TelegramSrc}
      alt="Telegram"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Telegram;