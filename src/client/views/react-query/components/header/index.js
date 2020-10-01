import React from 'react';
import { useUsers } from '../../hooks/user';
import styles from './styles.module.scss';

function Header() {
  const users = useUsers();

  return (
    <header className={styles.header}>
      <span># of Users: {users.length}</span>
    </header>
  );
}

export default Header;
