import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import MessengerSrc from '@snowui-design-system/resource-core/assets/logos/messenger.svg';

export const Messenger: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={MessengerSrc}
      alt="Messenger"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Messenger;
