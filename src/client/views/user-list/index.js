import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AddUserModal from 'client/components/add-user-modal';
import UserListTable from 'client/components/user-list-table';
import styles from './styles.module.css';

function UserListView({ handleAddUser, handleDeleteUser, users }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = async (values) => {
    await handleAddUser(values);
    setIsAdding(false);
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
      <UserListTable onDelete={handleDeleteUser} users={users} />
      <AddUserModal
        isOpen={isAdding}
        onClose={() => setIsAdding(false)}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
UserListView.propTypes = {
  handleAddUser: PropTypes.func,
  handleDeleteUser: PropTypes.func,
  users: PropTypes.array,
};

export default UserListView;
