import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserListView from 'client/views/user-list';
import { addUser, deleteUser, fetchUsers } from '../../state/modules/user';

function ReduxUserListView() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.list);

  const handleAddUser = (name) => dispatch(addUser(name));
  const handleDeleteUser = (id) => dispatch(deleteUser(id));

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <UserListView
      handleAddUser={handleAddUser}
      handleDeleteUser={handleDeleteUser}
      users={users}
    />
  );
}

export default ReduxUserListView;
