import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsHandPointingSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-hand-pointing.svg';
export const CursorsHandPointing: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsHandPointingSrc;
  return (
    <img
      src={CursorsHandPointingSrc}
      alt="CursorsHandPointing"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsHandPointing;