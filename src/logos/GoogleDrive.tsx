import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GoogleDriveSrc from '@snowui-design-system/resource-core/assets/logos/google-drive.svg';
export const GoogleDrive: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = GoogleDriveSrc;
  return (
    <img
      src={GoogleDriveSrc}
      alt="GoogleDrive"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default GoogleDrive;