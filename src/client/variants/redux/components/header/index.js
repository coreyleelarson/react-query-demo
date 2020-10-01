import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProjects, useProjectActions } from '../../hooks/project';
import { useUsers, useUserActions } from '../../hooks/user';
import styles from './styles.module.scss';

function Header() {
  const projects = useProjects();
  const projectActions = useProjectActions();
  const users = useUsers();
  const userActions = useUserActions();

  useEffect(() => {
    projectActions.handleFetchProjects();
    userActions.handleFetchUsers();
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/redux">Dashboard</Link>
          </li>
          <li>
            <Link to="/redux/projects">Projects</Link>
          </li>
          <li>
            <Link to="/redux/users">Users</Link>
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
