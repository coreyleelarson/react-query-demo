/* eslint-disable react/jsx-handler-names */
import React, { useEffect, useState } from 'react';
import UserListView from 'client/views/user-list';
import { useUser, useUsers, useUserActions } from '../../hooks/user';

function ReduxUserListView() {
  const [userId, setUserId] = useState();
  const user = useUser();
  const users = useUsers();
  const userActions = useUserActions();

  useEffect(() => {
    userActions.handleFetchUsers();
  }, []);

  useEffect(() => {
    if (userId) {
      userActions.handleFetchUser(userId);
    }
  }, [userId]);

  return (
    <UserListView
      handleAddUser={userActions.handleAddUser}
      handleDeleteUser={userActions.handleDeleteUser}
      handleSelectUser={setUserId}
      user={user}
      users={users}
    />
  );
}

export default ReduxUserListView;
