import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function AddUserModal({ isOpen, onClose, onSubmit }) {
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleSubmit = async () => {
    await onSubmit({ username, emailAddress });
    onClose();
    setUsername();
    setEmailAddress();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle id="form-dialog-title">Add User</DialogTitle>
      <DialogContent>
        <TextField
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <TextField
          label="Email Address"
          onChange={(e) => setEmailAddress(e.target.value)}
          value={emailAddress}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Add User
        </Button>
      </DialogActions>
    </Dialog>
  );
}
AddUserModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AddUserModal;
