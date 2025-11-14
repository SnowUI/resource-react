import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import OneNoteSrc from '@snowui-design-system/resource-core/assets/logos/one-note.svg';

export const OneNote: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={OneNoteSrc}
      alt="OneNote"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default OneNote;
