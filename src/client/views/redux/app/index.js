import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddUserModal from 'client/components/add-user-modal';
import UserListTable from 'client/components/user-list-table';
import { addUser, deleteUser, fetchUsers } from '../state/modules/user';

function App() {
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.list);

  const handleFetchUsers = () => {
    dispatch(fetchUsers());
  };
  const handleAddUser = async (values) => {
    await dispatch(addUser(values));
    setIsAdding(false);
  };
  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  return (
    <>
      <Button
        onClick={() => setIsAdding(true)}
        color="primary"
        variant="contained"
      >
        Add User
      </Button>
      <UserListTable onDelete={handleDeleteUser} users={users} />
      <AddUserModal
        isOpen={isAdding}
        onClose={() => setIsAdding(false)}
        onSubmit={handleAddUser}
      />
    </>
  );
}

export default App;
