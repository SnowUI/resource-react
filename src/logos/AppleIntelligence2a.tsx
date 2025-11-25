import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppleIntelligence2aSrc from '@snowui-design-system/resource-base/assets/logos/apple-intelligence-2a.svg';
export const AppleIntelligence2a: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AppleIntelligence2aSrc;
  return (
    <img
      src={AppleIntelligence2aSrc}
      alt="AppleIntelligence2a"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AppleIntelligence2a;