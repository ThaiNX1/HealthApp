import React, { createContext, useContext, ReactNode } from 'react';
import { UserRepository } from '../../domain/repositories/UserRepository';
import {
  CreateUserUseCase,
  GetUserUseCase,
  GetAllUsersUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
  CreateUserUseCaseImpl,
  GetUserUseCaseImpl,
  GetAllUsersUseCaseImpl,
  UpdateUserUseCaseImpl,
  DeleteUserUseCaseImpl,
} from '../../domain/use-cases/UserUseCases';

interface UserContextType {
  createUser: CreateUserUseCase;
  getUser: GetUserUseCase;
  getAllUsers: GetAllUsersUseCase;
  updateUser: UpdateUserUseCase;
  deleteUser: DeleteUserUseCase;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
  userRepository: UserRepository;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children, userRepository }) => {
  const userContextValue: UserContextType = {
    createUser: new CreateUserUseCaseImpl(userRepository),
    getUser: new GetUserUseCaseImpl(userRepository),
    getAllUsers: new GetAllUsersUseCaseImpl(userRepository),
    updateUser: new UpdateUserUseCaseImpl(userRepository),
    deleteUser: new DeleteUserUseCaseImpl(userRepository),
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
