import * as React from 'react';
import type { BackgroundProps } from '../lib/types';
import HumanoidSrc from '@snowui-design-system/resource-base/assets/illustrations/humanoid.svg';
export const Humanoid: React.FC<BackgroundProps> = ({ width = 320, height, ...rest }) => {
  const resolvedWidth = width ?? 320;
  const imageSrc = HumanoidSrc;
  return (
    <img
      src={HumanoidSrc}
      alt="Humanoid"
      width={resolvedWidth}
      height={height ?? undefined}
      {...rest}
    />
  );
};
export default Humanoid;