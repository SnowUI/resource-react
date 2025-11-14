import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ChatGptSrc from '@snowui-design-system/resource-core/assets/logos/chat-gpt.svg';

export const ChatGpt: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={ChatGptSrc}
      alt="ChatGpt"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default ChatGpt;
