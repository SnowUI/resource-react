import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SnapchatSrc from '@snowui-design-system/resource-core/assets/logos/snapchat.svg';
export const Snapchat: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SnapchatSrc;
  return (
    <img
      src={SnapchatSrc}
      alt="Snapchat"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Snapchat;