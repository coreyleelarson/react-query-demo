import React from 'react';
import { useTodos } from '../../hooks/todo';
import styles from './styles.module.scss';

function Header() {
  const todos = useTodos();

  if (todos.isLoading) return false;

  return (
    <header className={styles.header}>
      <span># of Todos: {todos.data.length}</span>
    </header>
  );
}

export default Header;
