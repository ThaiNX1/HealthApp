// Asset utility functions

import { ImageAsset, IconAsset } from '../types/assets';

/**
 * Generate optimized image src with parameters
 */
export const getOptimizedImageSrc = (
  src: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpeg' | 'png';
  } = {}
): string => {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // If it's an external URL, return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, you might want to add optimization parameters
  // This is a placeholder - implement based on your image optimization service
  let optimizedSrc = src;
  
  if (width) {
    optimizedSrc += `?w=${width}`;
  }
  if (height) {
    optimizedSrc += width ? `&h=${height}` : `?h=${height}`;
  }
  if (quality !== 80) {
    optimizedSrc += `${width || height ? '&' : '?'}q=${quality}`;
  }
  if (format !== 'webp') {
    optimizedSrc += `${width || height || quality !== 80 ? '&' : '?'}f=${format}`;
  }
  
  return optimizedSrc;
};

/**
 * Preload an image
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images
 */
export const preloadImages = async (srcs: string[]): Promise<HTMLImageElement[]> => {
  const promises = srcs.map(preloadImage);
  return Promise.all(promises);
};

/**
 * Get image dimensions
 */
export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Generate responsive image srcset
 */
export const generateSrcSet = (
  baseSrc: string,
  sizes: number[]
): string => {
  return sizes
    .map(size => `${getOptimizedImageSrc(baseSrc, { width: size })} ${size}w`)
    .join(', ');
};

/**
 * Check if image exists
 */
export const imageExists = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

/**
 * Get file extension from URL
 */
export const getFileExtension = (url: string): string => {
  return url.split('.').pop()?.toLowerCase() || '';
};

/**
 * Check if file is an image
 */
export const isImageFile = (url: string): boolean => {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp'];
  const extension = getFileExtension(url);
  return imageExtensions.includes(extension);
};

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Generate placeholder image URL
 */
export const getPlaceholderImage = (
  width: number = 300,
  height: number = 200,
  text?: string
): string => {
  const placeholderText = text ? encodeURIComponent(text) : `${width}x${height}`;
  return `https://via.placeholder.com/${width}x${height}/f8f9fa/6c757d?text=${placeholderText}`;
};

/**
 * Generate avatar image URL
 */
export const getAvatarImage = (
  name: string,
  size: number = 100,
  background?: string
): string => {
  const encodedName = encodeURIComponent(name);
  const bgColor = background ? `&background=${encodeURIComponent(background)}` : '';
  return `https://ui-avatars.com/api/?name=${encodedName}&size=${size}${bgColor}`;
};
