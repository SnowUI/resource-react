import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SkullCrossbonesSrc from '@snowui-design-system/resource-core/assets/emoji/skull-crossbones.svg';

export const SkullCrossbones: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={SkullCrossbonesSrc}
      alt="SkullCrossbones"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default SkullCrossbones;
