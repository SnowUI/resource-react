import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import OneDriveSrc from '@snowui-design-system/resource-core/assets/logos/one-drive.svg';

export const OneDrive: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={OneDriveSrc}
      alt="OneDrive"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default OneDrive;
