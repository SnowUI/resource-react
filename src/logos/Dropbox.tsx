import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import DropboxSrc from '@snowui-design-system/resource-core/assets/logos/dropbox.svg';
export const Dropbox: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = DropboxSrc;
  return (
    <img
      src={DropboxSrc}
      alt="Dropbox"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Dropbox;