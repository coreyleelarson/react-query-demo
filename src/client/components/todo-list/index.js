import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AddTodoModal from 'client/components/add-todo-modal';
import TodoListTable from 'client/components/todo-list-table';
import styles from './styles.module.css';

function TodoList({
  handleAddTodo,
  handleDeleteTodo,
  handleUpdateTodo,
  todos,
}) {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <main>
      <header className={styles.header}>
        <h2>Todos</h2>
        <div>
          <Button
            color="primary"
            onClick={() => setIsAdding(true)}
            variant="contained"
          >
            Add Todo
          </Button>
        </div>
      </header>
      <TodoListTable
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
        todos={todos}
      />
      <AddTodoModal
        isOpen={isAdding}
        onClose={() => setIsAdding(false)}
        onSubmit={handleAddTodo}
      />
    </main>
  );
}
TodoList.propTypes = {
  handleAddTodo: PropTypes.func,
  handleUpdateTodo: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
  todos: PropTypes.array,
};

export default TodoList;
