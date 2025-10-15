import React from 'react';
import styled from 'styled-components';
import { UserEntity } from '../../domain/entities/User';

interface UserCardProps {
  user: UserEntity;
  onEdit?: (user: UserEntity) => void;
  onDelete?: (userId: string) => void;
}

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const UserName = styled.h3`
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1.2rem;
`;

const UserEmail = styled.p`
  margin: 0 0 15px 0;
  color: #666;
  font-size: 0.9rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button<{ variant?: 'primary' | 'danger' }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s ease-in-out;

  ${props => props.variant === 'danger' 
    ? `
      background-color: #dc3545;
      color: white;
      &:hover {
        background-color: #c82333;
      }
    `
    : `
      background-color: #007bff;
      color: white;
      &:hover {
        background-color: #0056b3;
      }
    `
  }
`;

export const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={user.name} />
      <UserName>{user.name}</UserName>
      <UserEmail>{user.email}</UserEmail>
      <ButtonGroup>
        {onEdit && (
          <Button onClick={() => onEdit(user)}>
            Edit
          </Button>
        )}
        {onDelete && (
          <Button variant="danger" onClick={() => onDelete(user.id)}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Card>
  );
};
