import React, { useEffect } from 'react';
import { useUsers, useUserActions } from '../../hooks/user';
import styles from './styles.module.scss';

function Header() {
  const users = useUsers();
  const userActions = useUserActions();

  useEffect(() => {
    userActions.handleFetchUsers();
  }, []);

  return (
    <header className={styles.header}>
      <span># of Users: {users.length}</span>
    </header>
  );
}

export default Header;
