import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import DropboxSrc from '@snowui-design-system/resource-core/assets/logos/dropbox.svg';

export const Dropbox: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={DropboxSrc}
      alt="Dropbox"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Dropbox;
