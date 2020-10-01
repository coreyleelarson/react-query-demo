import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';

function ProjectDetailModal({ isOpen, onClose, project }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{project.name}</DialogTitle>
      <DialogContent>{project.description}</DialogContent>
    </Dialog>
  );
}
ProjectDetailModal.defaultProps = {
  project: {},
};
ProjectDetailModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default ProjectDetailModal;
