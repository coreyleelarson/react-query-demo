import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

function AddProjectForm({ onSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit({ name });
    },
    [name]
  );

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column">
        <Grid>
          <TextField
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Grid>
        <Grid>
          <Button color="primary" variant="contained" type="submit">
            Add Project
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
AddProjectForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddProjectForm;
