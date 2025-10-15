import { ApiService } from './ApiService';
import {
  User,
  Article,
  RecommendedCategory,
  FoodItem,
  MealCategory,
  BodyRecord,
  Challenge,
  Notification,
  ApiResponse,
  RecordItem,
  ExerciseItem,
  ExerciseDayItem,
  RecommendedItem,
  ColumnItem
} from '../../shared/types/data';

// Import mock data
import { users, challenges, notifications } from '../mock/userData';
import { columnItems, recommendedItems } from '../mock/columnData';
import { foodItems, mealCategories, bodyRecords } from '../mock/topPageData';
import { recordItems, exerciseItems, exerciseDayItems } from '../mock/myRecordData';

export class DataService {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  // User related methods
  async getUsers(): Promise<ApiResponse<User[]>> {
    // In a real app, this would be: return this.apiService.get<ApiResponse<User[]>>('/users');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: users,
          success: true,
          message: 'Users fetched successfully'
        });
      }, 500);
    });
  }

  async getUserById(id: number): Promise<ApiResponse<User>> {
    const user = users.find(u => u.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return {
      data: user,
      success: true,
      message: 'User fetched successfully'
    };
  }

  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<User>> {
    const newUser: User = {
      ...userData,
      id: Math.max(...users.map(u => u.id)) + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    users.push(newUser);
    return {
      data: newUser,
      success: true,
      message: 'User created successfully'
    };
  }

  async updateUser(id: number, userData: Partial<User>): Promise<ApiResponse<User>> {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    users[userIndex] = { ...users[userIndex], ...userData, updatedAt: new Date().toISOString() };
    return {
      data: users[userIndex],
      success: true,
      message: 'User updated successfully'
    };
  }

  async deleteUser(id: number): Promise<ApiResponse<boolean>> {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    users.splice(userIndex, 1);
    return {
      data: true,
      success: true,
      message: 'User deleted successfully'
    };
  }

  // Top page related methods
  async getFoodItems(): Promise<ApiResponse<FoodItem[]>> {
    return {
      data: foodItems,
      success: true,
      message: 'Food items fetched successfully'
    };
  }

  // Top page related methods
  async getRecordItems(): Promise<ApiResponse<RecordItem[]>> {
    return {
      data: recordItems,
      success: true,
      message: 'Record items fetched successfully'
    };
  }
  // Top page related methods
  async getExerciseItems(): Promise<ApiResponse<ExerciseItem[]>> {
    return {
      data: exerciseItems,
      success: true,
      message: 'Exercise items fetched successfully'
    };
  }

  async getExerciseDayItems(): Promise<ApiResponse<ExerciseDayItem[]>> {
    return {
      data: exerciseDayItems,
      success: true,
      message: 'Exercise items fetched successfully'
    };
  }

  async getRecommendedItems(): Promise<ApiResponse<RecommendedItem[]>> {
    return {
      data: recommendedItems,
      success: true,
      message: 'Recommended items fetched successfully'
    };
  }

  async getColumnItems(): Promise<ApiResponse<ColumnItem[]>> {
    return {
      data: columnItems,
      success: true,
      message: 'Column items fetched successfully'
    };
  }

  async getMealCategories(): Promise<ApiResponse<MealCategory[]>> {
    return {
      data: mealCategories,
      success: true,
      message: 'Meal categories fetched successfully'
    };
  }

  async getBodyRecords(): Promise<ApiResponse<BodyRecord[]>> {
    return {
      data: bodyRecords,
      success: true,
      message: 'Body records fetched successfully'
    };
  }

  // Challenge related methods
  async getChallenges(): Promise<ApiResponse<Challenge[]>> {
    return {
      data: challenges,
      success: true,
      message: 'Challenges fetched successfully'
    };
  }

  async getChallengeById(id: number): Promise<ApiResponse<Challenge>> {
    const challenge = challenges.find(c => c.id === id);
    if (!challenge) {
      throw new Error('Challenge not found');
    }
    return {
      data: challenge,
      success: true,
      message: 'Challenge fetched successfully'
    };
  }

  // Notification related methods
  async getNotifications(): Promise<ApiResponse<Notification[]>> {
    return {
      data: notifications,
      success: true,
      message: 'Notifications fetched successfully'
    };
  }

  async markNotificationAsRead(id: number): Promise<ApiResponse<Notification>> {
    const notification = notifications.find(n => n.id === id);
    if (!notification) {
      throw new Error('Notification not found');
    }
    notification.read = true;
    return {
      data: notification,
      success: true,
      message: 'Notification marked as read'
    };
  }

  async markAllNotificationsAsRead(): Promise<ApiResponse<boolean>> {
    notifications.forEach(n => n.read = true);
    return {
      data: true,
      success: true,
      message: 'All notifications marked as read'
    };
  }
}

// Export a singleton instance
export const dataService = new DataService();
