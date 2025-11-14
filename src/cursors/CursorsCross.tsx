import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CursorsCrossSrc from '@snowui-design-system/resource-core/assets/cursors/cursors-cross.svg';
export const CursorsCross: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CursorsCrossSrc;
  return (
    <img
      src={CursorsCrossSrc}
      alt="CursorsCross"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default CursorsCross;