import React from 'react';
import { useTodos } from '../../hooks/todo';
import styles from './styles.module.scss';

function Header() {
  const todos = useTodos();

  return (
    <header className={styles.header}>
      <span># of Todos: {todos.length}</span>
    </header>
  );
}

export default Header;
