import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppleIntelligenceBSrc from '@snowui-design-system/resource-core/assets/logos/apple-intelligence-b.svg';
export const AppleIntelligenceB: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AppleIntelligenceBSrc;
  return (
    <img
      src={AppleIntelligenceBSrc}
      alt="AppleIntelligenceB"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AppleIntelligenceB;