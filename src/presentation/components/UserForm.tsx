import React, { useState } from 'react';
import styled from 'styled-components';
import { UserEntity } from '../../domain/entities/User';
import { useCreateUser, useUpdateUser } from '../hooks/useUsers';

interface UserFormProps {
  user?: UserEntity;
  onSuccess?: (user: UserEntity) => void;
  onCancel?: () => void;
}

const Form = styled.form`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;

  ${props => props.variant === 'secondary'
    ? `
      background-color: #6c757d;
      color: white;
      &:hover {
        background-color: #545b62;
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 5px;
`;

export const UserForm: React.FC<UserFormProps> = ({ user, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    avatar: user?.avatar || '',
  });

  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();

  const isLoading = createUserMutation.loading || updateUserMutation.loading;
  const error = createUserMutation.error || updateUserMutation.error;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let result: UserEntity;
      
      if (user) {
        // Update existing user
        const updatedUser = await updateUserMutation.update(user.id, formData);
        if (!updatedUser) {
          throw new Error('Failed to update user');
        }
        result = updatedUser;
      } else {
        // Create new user
        result = await createUserMutation.create(formData);
      }
      
      onSuccess?.(result);
    } catch (error) {
      // Error is handled by the hooks
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="avatar">Avatar URL (optional)</Label>
        <Input
          id="avatar"
          name="avatar"
          type="url"
          value={formData.avatar}
          onChange={handleChange}
        />
      </FormGroup>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <ButtonGroup>
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : user ? 'Update' : 'Create'}
        </Button>
      </ButtonGroup>
    </Form>
  );
};
