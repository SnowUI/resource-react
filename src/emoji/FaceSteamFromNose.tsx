import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import FaceSteamFromNoseSrc from '@snowui-design-system/resource-core/assets/emoji/face-steam-from-nose.svg';
export const FaceSteamFromNose: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = FaceSteamFromNoseSrc;
  return (
    <img
      src={FaceSteamFromNoseSrc}
      alt="FaceSteamFromNose"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default FaceSteamFromNose;