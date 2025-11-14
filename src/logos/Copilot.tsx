import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import CopilotSrc from '@snowui-design-system/resource-core/assets/logos/copilot.svg';

export const Copilot: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={CopilotSrc}
      alt="Copilot"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Copilot;
