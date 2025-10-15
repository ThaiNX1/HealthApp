// Asset type definitions

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export interface IconAsset {
  src: string;
  alt: string;
  size?: number;
  color?: string;
}

export interface FontAsset {
  family: string;
  weights: number[];
  styles?: ('normal' | 'italic')[];
  display?: 'swap' | 'block' | 'fallback' | 'optional';
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
  white: string;
  black: string;
}

export interface ThemeBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  breakpoints: ThemeBreakpoints;
  spacing: ThemeSpacing;
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
}

export interface AppConfig {
  name: string;
  version: string;
  description: string;
  author: string;
  repository: string;
  apiUrl: string;
  environment: 'development' | 'staging' | 'production';
}

export interface AssetManifest {
  images: Record<string, string>;
  icons: Record<string, string>;
  fonts: Record<string, string>;
  styles: Record<string, string>;
}
