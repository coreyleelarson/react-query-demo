import { useMutation, useQuery, useQueryCache } from 'react-query';
import UserService from 'client/services/user';

const useUsers = () => {
  const { data = [] } = useQuery('users', UserService.getUsers);
  return data;
};

const useUserActions = () => {
  const queryCache = useQueryCache();
  const onSuccessHandler = () => {
    queryCache.invalidateQueries('users');
  };
  const [handleAddUser] = useMutation(UserService.addUser, {
    onSuccess: onSuccessHandler,
  });
  const [handleDeleteUser] = useMutation(UserService.deleteUser, {
    onSuccess: onSuccessHandler,
  });
  return { handleAddUser, handleDeleteUser };
};

export { useUsers, useUserActions };
