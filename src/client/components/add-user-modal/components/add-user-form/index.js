import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

function AddUserForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit({ username, emailAddress });
    },
    [username, emailAddress]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column">
        <Grid>
          <TextField
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </Grid>
        <Grid>
          <TextField
            label="Email Address"
            onChange={(e) => setEmailAddress(e.target.value)}
            value={emailAddress}
          />
        </Grid>
        <Grid>
          <Button color="primary" variant="contained" type="submit">
            Add User
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
AddUserForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddUserForm;
