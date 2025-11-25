import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CopilotSrc from '@snowui-design-system/resource-base/assets/logos/copilot.svg';
export const Copilot: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = CopilotSrc;
  return (
    <img
      src={CopilotSrc}
      alt="Copilot"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Copilot;