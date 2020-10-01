import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import React from 'react';

function UserDetailModal({ isOpen, onClose, user }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{user.username}</DialogTitle>
      <DialogContent>{user.emailAddress}</DialogContent>
    </Dialog>
  );
}
UserDetailModal.defaultProps = {
  user: {},
};
UserDetailModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  user: PropTypes.shape({
    username: PropTypes.string,
    emailAddress: PropTypes.string,
  }),
};

export default UserDetailModal;
