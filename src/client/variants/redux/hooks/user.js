import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, fetchUsers } from '../state/modules/user';

const useUsers = () => {
  return useSelector((state) => state.user.list);
};

const useUserActions = () => {
  const dispatch = useDispatch();
  const handleAddUser = (name) => dispatch(addUser(name));
  const handleDeleteUser = (id) => dispatch(deleteUser(id));
  const handleFetchUsers = () => dispatch(fetchUsers());
  return { handleAddUser, handleFetchUsers, handleDeleteUser };
};

export { useUsers, useUserActions };
