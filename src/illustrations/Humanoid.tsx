import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import HumanoidSrc from '@snowui-design-system/resource-core/assets/illustrations/humanoid.svg';

export const Humanoid: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={HumanoidSrc}
      alt="Humanoid"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Humanoid;
