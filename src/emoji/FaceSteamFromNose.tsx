import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FaceSteamFromNoseSrc from '@snowui-design-system/resource-core/assets/emoji/face-steam-from-nose.svg';

export const FaceSteamFromNose: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={FaceSteamFromNoseSrc}
      alt="FaceSteamFromNose"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default FaceSteamFromNose;
