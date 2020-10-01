import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/react-query">Dashboard</Link>
          </li>
          <li>
            <Link to="/react-query/projects">Projects</Link>
          </li>
          <li>
            <Link to="/react-query/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
