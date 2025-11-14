import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import NotionSrc from '@snowui-design-system/resource-core/assets/logos/notion.svg';

export const Notion: React.FC<AvatarProps> = ({ size, width, height, ...rest }) => {
  const resolvedWidth = size ?? width;
  const resolvedHeight = size ?? height;
  return (
    <img
      src={NotionSrc}
      alt="Notion"
      width={resolvedWidth ?? undefined}
      height={resolvedHeight ?? undefined}
      {...rest}
    />
  );
};

export default Notion;
