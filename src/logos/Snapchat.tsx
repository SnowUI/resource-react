import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SnapchatSrc from '@snowui-design-system/resource-core/assets/logos/snapchat.svg';

export const Snapchat: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={SnapchatSrc}
      alt="Snapchat"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Snapchat;
