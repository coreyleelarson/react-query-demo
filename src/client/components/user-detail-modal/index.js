import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';

function UserDetailModal({ isOpen, onClose, onDelete, user }) {
  const handleDelete = async () => {
    await onDelete(user.id);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{user.username}</DialogTitle>
      <DialogContent>{user.emailAddress}</DialogContent>
      <DialogActions>
        <Button onClick={handleDelete} color="secondary" variant="contained">
          Delete User
        </Button>
      </DialogActions>
    </Dialog>
  );
}
UserDetailModal.defaultProps = {
  user: {},
};
UserDetailModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onDelete: PropTypes.fund,
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    emailAddress: PropTypes.string,
  }),
};

export default UserDetailModal;
