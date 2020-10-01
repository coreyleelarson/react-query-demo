import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import styles from './style.module.css';

function Spinner() {
  return (
    <div className={styles.container}>
      <CircularProgress />
    </div>
  );
}

export default Spinner;
