import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppleIntelligenceASrc from '@snowui-design-system/resource-base/assets/logos/apple-intelligence-a.svg';
export const AppleIntelligenceA: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AppleIntelligenceASrc;
  return (
    <img
      src={AppleIntelligenceASrc}
      alt="AppleIntelligenceA"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AppleIntelligenceA;