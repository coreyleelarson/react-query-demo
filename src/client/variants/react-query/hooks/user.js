import { useMutation, useQuery, useQueryCache } from 'react-query';
import UserService from 'client/services/user';

const useUser = (id) => {
  const { data = {} } = useQuery(['users', id], () => UserService.getUser(id));
  return data;
};

const useUsers = () => {
  const { data = [] } = useQuery('users', UserService.getUsers);
  return data;
};

const useUserActions = () => {
  const queryCache = useQueryCache();
  const [handleAddUser] = useMutation(UserService.addUser, {
    onSuccess: () => {
      queryCache.invalidateQueries('users');
    },
  });
  const [handleDeleteUser] = useMutation(UserService.deleteUser, {
    onSuccess: () => {
      queryCache.invalidateQueries('users');
    },
  });
  return { handleAddUser, handleDeleteUser };
};

export { useUser, useUsers, useUserActions };
