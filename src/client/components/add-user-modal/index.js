import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';
import AddUserForm from './components/add-user-form';

function AddUserModal({ isOpen, onClose, onSubmit }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle id="form-dialog-title">Add User</DialogTitle>
      <DialogContent>
        <AddUserForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}
AddUserModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AddUserModal;
