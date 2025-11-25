import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import ChatGptSrc from '@snowui-design-system/resource-base/assets/logos/chat-gpt.svg';
export const ChatGpt: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = ChatGptSrc;
  return (
    <img
      src={ChatGptSrc}
      alt="ChatGpt"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default ChatGpt;