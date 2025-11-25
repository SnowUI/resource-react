import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import OneDriveSrc from '@snowui-design-system/resource-base/assets/logos/one-drive.svg';
export const OneDrive: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = OneDriveSrc;
  return (
    <img
      src={OneDriveSrc}
      alt="OneDrive"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default OneDrive;