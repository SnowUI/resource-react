import * as React from 'react';
import type { IconProps, IconWeight, IconMeta } from './types';
import { useIconContext } from './IconProvider';
import { resolveSwitch } from './switch-resolver';
import { iconsByCollection } from '../icons/by-name';

type WeightsMap = Partial<Record<IconWeight, React.ReactNode>>;

export interface IconBaseProps extends IconProps {
  weights: WeightsMap;
  /** 由生成器注入的图标元数据 */
  meta?: IconMeta;
}

const IconBase = React.forwardRef<SVGSVGElement, IconBaseProps>(function IconBase(
  {
    meta,
    size,
    color,
    weight: explicitWeight,
    className,
    weights,
    viewBox,
    bypassSwitch = false,
    ...rest
  },
  ref,
) {
  const ctx = useIconContext();
  const weight = explicitWeight ?? ctx.weight ?? 'regular';
  const finalSize = size ?? ctx.size ?? 24;
  const finalColor = color ?? ctx.color ?? 'currentColor';

  // 决定是否切换
  const switched = React.useMemo(() => {
    if (bypassSwitch || !meta || !ctx.replace) return null;
    return resolveSwitch(
      meta,
      ctx.replace,
      iconsByCollection as Record<string, Record<string, unknown>>,
    );
  }, [bypassSwitch, meta, ctx.replace]);

  if (switched) {
    const SwitchedComponent = (
      iconsByCollection as Record<string, Record<string, React.ComponentType<IconProps>>>
    )[switched.collection]?.[switched.iconName];
    if (SwitchedComponent) {
      return (
        <SwitchedComponent
          bypassSwitch
          weight={weight}
          size={finalSize}
          color={finalColor}
          className={className}
          {...rest}
        />
      );
    }
  }

  const content = (weights && weights[weight]) || weights?.regular;
  if (!content) return null;
  const finalViewBox = viewBox || '0 0 256 256';
  return (
    <svg
      ref={ref}
      width={finalSize}
      height={finalSize}
      viewBox={finalViewBox}
      fill={finalColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      {content}
    </svg>
  );
});

export default IconBase;
