import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppleIntelligence2bSrc from '@snowui-design-system/resource-core/assets/logos/apple-intelligence-2b.svg';

export const AppleIntelligence2b: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AppleIntelligence2bSrc}
      alt="AppleIntelligence2b"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AppleIntelligence2b;
