import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import OneNoteSrc from '@snowui-design-system/resource-core/assets/logos/one-note.svg';
export const OneNote: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = OneNoteSrc;
  return (
    <img
      src={OneNoteSrc}
      alt="OneNote"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default OneNote;