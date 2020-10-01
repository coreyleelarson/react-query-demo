import React from 'react';
import { useMutation, useQuery, useQueryCache } from 'react-query';
import UserService from 'client/services/user';
import UserListView from 'client/views/user-list';

function ReactQueryUserListView() {
  const queryCache = useQueryCache();
  const { data = [] } = useQuery('users', UserService.getUsers);
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

  return (
    <UserListView
      handleAddUser={handleAddUser}
      handleDeleteUser={handleDeleteUser}
      users={data}
    />
  );
}

export default ReactQueryUserListView;
