import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';
import AddProjectForm from './components/add-project-form';

function AddProjectModal({ isOpen, onClose, onSubmit }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle id="form-dialog-title">Add Project</DialogTitle>
      <DialogContent>
        <AddProjectForm onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}
AddProjectModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AddProjectModal;
