import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsDefaultSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-default.svg';
export const CursorsDefault: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsDefaultSrc;
  return (
    <img
      src={CursorsDefaultSrc}
      alt="CursorsDefault"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsDefault;