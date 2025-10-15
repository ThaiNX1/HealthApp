import { UserEntity } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export interface CreateUserUseCase {
  execute(userData: {
    name: string;
    email: string;
    avatar?: string;
  }): Promise<UserEntity>;
}

export interface GetUserUseCase {
  execute(id: string): Promise<UserEntity | null>;
}

export interface GetAllUsersUseCase {
  execute(): Promise<UserEntity[]>;
}

export interface UpdateUserUseCase {
  execute(id: string, userData: {
    name?: string;
    email?: string;
    avatar?: string;
  }): Promise<UserEntity | null>;
}

export interface DeleteUserUseCase {
  execute(id: string): Promise<void>;
}

// Implementation classes
export class CreateUserUseCaseImpl implements CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: {
    name: string;
    email: string;
    avatar?: string;
  }): Promise<UserEntity> {
    const user = UserEntity.create(userData);
    return await this.userRepository.create(user);
  }
}

export class GetUserUseCaseImpl implements GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<UserEntity | null> {
    return await this.userRepository.findById(id);
  }
}

export class GetAllUsersUseCaseImpl implements GetAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }
}

export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string, userData: {
    name?: string;
    email?: string;
    avatar?: string;
  }): Promise<UserEntity | null> {
    const existingUser = await this.userRepository.findById(id);
    if (!existingUser) {
      return null;
    }

    const updatedUser = existingUser.update(userData);
    return await this.userRepository.update(updatedUser);
  }
}

export class DeleteUserUseCaseImpl implements DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
