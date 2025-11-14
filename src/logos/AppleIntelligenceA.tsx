import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppleIntelligenceASrc from '@snowui-design-system/resource-core/assets/logos/apple-intelligence-a.svg';

export const AppleIntelligenceA: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AppleIntelligenceASrc}
      alt="AppleIntelligenceA"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AppleIntelligenceA;
