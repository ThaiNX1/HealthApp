import { useState, useEffect } from 'react';
import { UserEntity } from '../../domain/entities/User';
import { useUserContext } from '../contexts/UserContext';

export const useUsers = () => {
  const { getAllUsers } = useUserContext();
  const [users, setUsers] = useState<UserEntity[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const userList = await getAllUsers.execute();
      setUsers(userList);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
  };
};

export const useUser = (id: string) => {
  const { getUser } = useUserContext();
  const [user, setUser] = useState<UserEntity | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    if (!id) return;
    
    setLoading(true);
    setError(null);
    try {
      const userData = await getUser.execute(id);
      setUser(userData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return {
    user,
    loading,
    error,
    refetch: fetchUser,
  };
};

export const useCreateUser = () => {
  const { createUser } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (userData: {
    name: string;
    email: string;
    avatar?: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await createUser.execute(userData);
      return newUser;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    create,
    loading,
    error,
  };
};

export const useUpdateUser = () => {
  const { updateUser } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = async (id: string, userData: {
    name?: string;
    email?: string;
    avatar?: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const updatedUser = await updateUser.execute(id, userData);
      return updatedUser;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    update,
    loading,
    error,
  };
};

export const useDeleteUser = () => {
  const { deleteUser } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteUserById = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await deleteUser.execute(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteUser: deleteUserById,
    loading,
    error,
  };
};
