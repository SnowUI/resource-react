import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MessengerSrc from '@snowui-design-system/resource-base/assets/logos/messenger.svg';
export const Messenger: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = MessengerSrc;
  return (
    <img
      src={MessengerSrc}
      alt="Messenger"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Messenger;