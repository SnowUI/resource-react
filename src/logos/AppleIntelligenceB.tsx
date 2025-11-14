import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppleIntelligenceBSrc from '@snowui-design-system/resource-core/assets/logos/apple-intelligence-b.svg';

export const AppleIntelligenceB: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AppleIntelligenceBSrc}
      alt="AppleIntelligenceB"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AppleIntelligenceB;
