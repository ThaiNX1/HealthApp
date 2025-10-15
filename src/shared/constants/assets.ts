// Asset paths and constants
export const ASSETS = {
  // Image paths
  IMAGES: {
    LOGO: '/icons/logo.svg',
  },
  
  // Icon paths
  ICONS: {
    FAVICON: '/favicon.ico',
    CLOSE: '/icons/icon_close.svg',
    MENU: '/icons/menu.svg',
    UP: '/icons/scroll_top.svg',
  },
  
  // Font paths
  FONTS: {
    ROBOTO: 'https://fonts.google.com/noto/specimen/Noto+Sans+JP',
    INTER: 'https://fonts.google.com/specimen/Inter',
  },
} as const;

// API endpoints
export const API_ENDPOINTS = {
  BASE_URL: process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com',
  USERS: '/users',
  POSTS: '/posts',
  COMMENTS: '/comments',
} as const;

// App configuration
export const APP_CONFIG = {
  NAME: 'React Clean Architecture',
  VERSION: '1.0.0',
  DESCRIPTION: 'A React application built with clean architecture principles',
  AUTHOR: 'Your Name',
  REPOSITORY: 'https://github.com/yourusername/react-clean-architecture',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_PREFERENCES: 'userPreferences',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const;

// Theme configuration
export const THEME = {
  COLORS: {
    PRIMARY: '#007bff',
    SECONDARY: '#6c757d',
    SUCCESS: '#28a745',
    DANGER: '#dc3545',
    WARNING: '#ffc107',
    INFO: '#17a2b8',
    LIGHT: '#f8f9fa',
    DARK: '#343a40',
  },
  BREAKPOINTS: {
    XS: '0px',
    SM: '576px',
    MD: '768px',
    LG: '992px',
    XL: '1200px',
    XXL: '1400px',
  },
  SPACING: {
    XS: '0.25rem',
    SM: '0.5rem',
    MD: '1rem',
    LG: '1.5rem',
    XL: '2rem',
    XXL: '3rem',
  },
} as const;
