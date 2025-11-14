import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppleIntelligence2bSrc from '@snowui-design-system/resource-core/assets/logos/apple-intelligence-2b.svg';
export const AppleIntelligence2b: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = AppleIntelligence2bSrc;
  return (
    <img
      src={AppleIntelligence2bSrc}
      alt="AppleIntelligence2b"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default AppleIntelligence2b;