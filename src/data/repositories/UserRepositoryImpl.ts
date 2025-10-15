import { UserEntity } from '../../domain/entities/User';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { dataService } from '../services/DataService';
import { User } from '../../shared/types/data';

export interface UserApiResponse {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export class UserRepositoryImpl implements UserRepository {
  constructor() {
    // No need for dependency injection since we're using the singleton dataService
  }

  private mapDataToEntity(user: User): UserEntity {
    return new UserEntity(
      user.id.toString(),
      user.name,
      user.email,
      user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`,
      new Date(user.createdAt),
      new Date(user.updatedAt)
    );
  }

  async findAll(): Promise<UserEntity[]> {
    try {
      const response = await dataService.getUsers();
      return response.data.map(user => this.mapDataToEntity(user));
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }
  }

  async findById(id: string): Promise<UserEntity | null> {
    try {
      const response = await dataService.getUserById(parseInt(id));
      return this.mapDataToEntity(response.data);
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      return null;
    }
  }

  async create(user: UserEntity): Promise<UserEntity> {
    try {
      const userData = {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        age: undefined,
        gender: undefined
      };
      
      const response = await dataService.createUser(userData);
      return this.mapDataToEntity(response.data);
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  }

  async update(user: UserEntity): Promise<UserEntity> {
    try {
      const userData = {
        name: user.name,
        email: user.email,
        avatar: user.avatar
      };
      
      const response = await dataService.updateUser(parseInt(user.id), userData);
      return this.mapDataToEntity(response.data);
    } catch (error) {
      console.error(`Error updating user with id ${user.id}:`, error);
      throw new Error('Failed to update user');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await dataService.deleteUser(parseInt(id));
    } catch (error) {
      console.error(`Error deleting user with id ${id}:`, error);
      throw new Error('Failed to delete user');
    }
  }
}
