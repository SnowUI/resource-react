export type IconWeight = 'regular' | 'thin' | 'light' | 'bold' | 'fill' | 'duotone';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  weight?: IconWeight;
  className?: string;
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


