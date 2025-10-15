// Data type definitions for the application

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
  createdAt: string;
  updatedAt: string;
}

export interface RecommendedCategory {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  description?: string;
  icon?: string;
  color?: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  content?: string;
  image: string;
  date: string;
  tags: string[];
  category: string;
  author?: string;
  readTime?: number;
  likes?: number;
  views?: number;
  featured?: boolean;
}

export interface RecordItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface FoodItem {
  id: number;
  name: string;
  image: string;
  category: 'morning' | 'lunch' | 'dinner' | 'snack';
  calories?: number;
  date: string;
  description?: string;
}

export interface ExerciseItem {
  id: number;
  title: string;
  description: string;
  value: string;
  time: string;
}

export interface ExerciseDayItem {
  id: number;
  title: string;
  description: string;
  day: string;
  time: string;
}

export interface RecommendedItem {
  id: number;
  title: string;
  category: string;
  description: string;
}

export interface ColumnItem {
  id: number;
  description: string;
  image: string;
  hashTags: string;
  date: string;
}

export interface MealCategory {
  id: number;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface BodyRecord {
  id: number;
  date: string;
  weight: number;
  bodyFat: number;
  muscle: number;
  water: number;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  participants: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  rewards?: string[];
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
