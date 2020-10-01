/* eslint-disable react/jsx-handler-names */
import React, { useState } from 'react';
import UserList from 'client/components/user-list';
import { useUser, useUsers, useUserActions } from '../../hooks/user';

function ReactQueryUserList() {
  const [userId, setUserId] = useState();
  const user = useUser(userId);
  const users = useUsers();
  const userActions = useUserActions();

  return (
    <UserList
      handleAddUser={userActions.handleAddUser}
      handleDeleteUser={userActions.handleDeleteUser}
      handleSelectUser={setUserId}
      user={user}
      users={users}
    />
  );
}

export default ReactQueryUserList;
