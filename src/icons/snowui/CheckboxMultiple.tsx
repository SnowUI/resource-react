import * as React from 'react';
import IconBase from '../../lib/IconBase';
import type { IconProps } from '../../lib/types';

const weights = { 'regular': <><path fill="currentColor" d="M2 14.8c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C8.08 2 10.32 2 14.8 2h2.4c4.48 0 6.72 0 8.432.872a8 8 0 0 1 3.496 3.496C30 8.08 30 10.32 30 14.8v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 0 1-3.496 3.496C23.92 30 21.68 30 17.2 30h-2.4c-4.48 0-6.72 0-8.432-.872a8 8 0 0 1-3.496-3.496C2 23.92 2 21.68 2 17.2z"/><path fill="#fff" fillRule="evenodd" d="M9.5 16a1.5 1.5 0 0 1 1.5-1.5h10a1.5 1.5 0 0 1 0 3H11A1.5 1.5 0 0 1 9.5 16" clipRule="evenodd"/></> } as const;
const meta = { collection: 'snowui', usageName: 'checkbox-multiple', componentName: 'CheckboxMultiple' } as const;
const defaultViewBox = "0 0 32 32";

export const CheckboxMultiple: React.FC<IconProps> = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return <IconBase ref={ref} {...props} meta={meta} viewBox={defaultViewBox} weights={weights as any} />;
});

CheckboxMultiple.displayName = 'CheckboxMultiple';

export default CheckboxMultiple;
