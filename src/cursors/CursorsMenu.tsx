import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsMenuSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-menu.svg';
export const CursorsMenu: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsMenuSrc;
  return (
    <img
      src={CursorsMenuSrc}
      alt="CursorsMenu"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsMenu;