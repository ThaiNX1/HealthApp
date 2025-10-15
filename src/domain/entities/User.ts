export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserEntity implements User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly avatar: string = '',
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date()
  ) {}

  static create(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): UserEntity {
    const now = new Date();
    return new UserEntity(
      Math.random().toString(36).substr(2, 9), // Simple ID generation
      data.name,
      data.email,
      data.avatar || '',
      now,
      now
    );
  }

  update(data: Partial<Pick<User, 'name' | 'email' | 'avatar'>>): UserEntity {
    return new UserEntity(
      this.id,
      data.name ?? this.name,
      data.email ?? this.email,
      data.avatar ?? this.avatar,
      this.createdAt,
      new Date()
    );
  }
}
