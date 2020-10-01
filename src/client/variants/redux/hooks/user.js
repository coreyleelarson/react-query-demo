import { useDispatch, useSelector } from 'react-redux';
import {
  addUser,
  deleteUser,
  fetchUser,
  fetchUsers,
} from '../state/modules/user';

const useUser = () => {
  return useSelector((state) => state.user.detail);
};

const useUsers = () => {
  return useSelector((state) => state.user.list);
};

const useUserActions = () => {
  const dispatch = useDispatch();
  const handleAddUser = (name) => dispatch(addUser(name));
  const handleDeleteUser = (id) => dispatch(deleteUser(id));
  const handleFetchUser = (id) => dispatch(fetchUser(id));
  const handleFetchUsers = () => dispatch(fetchUsers());
  return { handleAddUser, handleFetchUser, handleFetchUsers, handleDeleteUser };
};

export { useUser, useUsers, useUserActions };
