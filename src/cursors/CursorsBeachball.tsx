import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsBeachballSrc from '@snowui-design-system/resource-base/assets/cursors/cursors-beachball.svg';
export const CursorsBeachball: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsBeachballSrc;
  return (
    <img
      src={CursorsBeachballSrc}
      alt="CursorsBeachball"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsBeachball;