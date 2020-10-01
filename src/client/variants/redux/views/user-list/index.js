/* eslint-disable react/jsx-handler-names */
import React, { useEffect } from 'react';
import UserListView from 'client/views/user-list';
import { useUsers, useUserActions } from '../../hooks/user';

function ReduxUserListView() {
  const users = useUsers();
  const userActions = useUserActions();

  useEffect(() => {
    userActions.handleFetchUsers();
  }, []);

  return (
    <UserListView
      handleAddUser={userActions.handleAddUser}
      handleDeleteUser={userActions.handleDeleteUser}
      users={users}
    />
  );
}

export default ReduxUserListView;
