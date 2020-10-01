import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AddUserModal from 'client/components/add-user-modal';
import UserDetailModal from 'client/components/user-detail-modal';
import UserListTable from 'client/components/user-list-table';
import styles from './styles.module.css';

function UserList({
  handleAddUser,
  handleDeleteUser,
  handleSelectUser,
  user,
  users,
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  const onSelect = (id) => {
    setIsViewing(true);
    handleSelectUser(id);
  };

  return (
    <main>
      <header className={styles.header}>
        <h2>Users</h2>
        <div>
          <Button
            color="primary"
            onClick={() => setIsAdding(true)}
            variant="contained"
          >
            Add User
          </Button>
        </div>
      </header>
      <UserListTable
        onDelete={handleDeleteUser}
        onSelect={onSelect}
        users={users}
      />
      <AddUserModal
        isOpen={isAdding}
        onClose={() => setIsAdding(false)}
        onSubmit={handleAddUser}
      />
      <UserDetailModal
        isOpen={isViewing}
        onClose={() => setIsViewing(false)}
        onDelete={handleDeleteUser}
        user={user}
      />
    </main>
  );
}
UserList.propTypes = {
  handleAddUser: PropTypes.func,
  handleDeleteUser: PropTypes.func,
  handleSelectUser: PropTypes.func,
  user: PropTypes.object,
  users: PropTypes.array,
};

export default UserList;
