import * as React from 'react';
import type { AvatarProps } from '../lib/types';
import NotionSrc from '@snowui-design-system/resource-base/assets/logos/notion.svg';
export const Notion: React.FC<AvatarProps> = ({ size = 32, width, height, ...rest }) => {
  const resolvedWidth = size ?? width ?? 32;
  const resolvedHeight = size ?? height ?? 32;
  const imageSrc = NotionSrc;
  return (
    <img
      src={NotionSrc}
      alt="Notion"
      width={resolvedWidth}
      height={resolvedHeight}
      {...rest}
    />
  );
};
export default Notion;