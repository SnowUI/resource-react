import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import AppleIntelligence2aSrc from '@snowui-design-system/resource-core/assets/logos/apple-intelligence-2a.svg';

export const AppleIntelligence2a: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={AppleIntelligence2aSrc}
      alt="AppleIntelligence2a"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default AppleIntelligence2a;
