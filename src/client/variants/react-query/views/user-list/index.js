/* eslint-disable react/jsx-handler-names */
import React, { useState } from 'react';
import UserListView from 'client/views/user-list';
import { useUser, useUsers, useUserActions } from '../../hooks/user';

function ReactQueryUserListView() {
  const [userId, setUserId] = useState();
  const user = useUser(userId);
  const users = useUsers();
  const userActions = useUserActions();

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

export default ReactQueryUserListView;
