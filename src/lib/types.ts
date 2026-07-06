export type IconWeight = 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';

export interface IconMeta {
  collection: string;
  /** kebab-case usageName */
  usageName: string;
  componentName: string;
}

export interface ReplacePolicy {
  preserve?: string[];
  replaceMap?: Record<string, string>;
  targetCollection?: string;
  priority?: string[];
}

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'color'> {
  size?: number | string;
  color?: string;
  weight?: IconWeight;
  className?: string;
  /** 内部使用：防止二次替换 */
  bypassSwitch?: boolean;
}

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
  src?: string;
}

export interface BackgroundProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
  src?: string;
}
