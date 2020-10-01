import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function AddTodoModal({ isOpen, onClose, onSubmit }) {
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    await onSubmit({ description });
    onClose();
    setDescription();
  };

  return (
    <Dialog fullWidth open={isOpen} onClose={onClose}>
      <DialogTitle id="form-dialog-title">Add Todo</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Add Todo
        </Button>
      </DialogActions>
    </Dialog>
  );
}
AddTodoModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AddTodoModal;
