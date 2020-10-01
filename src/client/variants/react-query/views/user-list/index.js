/* eslint-disable react/jsx-handler-names */
import React from 'react';
import UserListView from 'client/views/user-list';
import { useUsers, useUserActions } from '../../hooks/user';

function ReactQueryUserListView() {
  const users = useUsers();
  const userActions = useUserActions();

  return (
    <UserListView
      handleAddUser={userActions.handleAddUser}
      handleDeleteUser={userActions.handleDeleteUser}
      users={users}
    />
  );
}

export default ReactQueryUserListView;
