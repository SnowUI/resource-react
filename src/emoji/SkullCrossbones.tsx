import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import SkullCrossbonesSrc from '@snowui-design-system/resource-core/assets/emoji/skull-crossbones.svg';
export const SkullCrossbones: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = SkullCrossbonesSrc;
  return (
    <img
      src={SkullCrossbonesSrc}
      alt="SkullCrossbones"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default SkullCrossbones;