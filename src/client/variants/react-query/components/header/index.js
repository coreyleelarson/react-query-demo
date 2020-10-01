import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../../hooks/project';
import { useUsers } from '../../hooks/user';
import styles from './styles.module.scss';

function Header() {
  const projects = useProjects();
  const users = useUsers();

  return (
    <header className={styles.header}>
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
      <div className={styles.details}>
        <span># of Projects: {projects.length}</span>
        <span># of Users: {users.length}</span>
      </div>
    </header>
  );
}

export default Header;
