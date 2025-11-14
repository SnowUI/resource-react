import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import GoogleDriveSrc from '@snowui-design-system/resource-core/assets/logos/google-drive.svg';

export const GoogleDrive: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={GoogleDriveSrc}
      alt="GoogleDrive"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default GoogleDrive;
