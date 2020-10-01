/* eslint-disable react/jsx-handler-names */
import React, { useEffect } from 'react';
import TodoListView from 'client/components/todo-list';
import { useTodos, useTodoActions } from '../../hooks/todo';

function ReduxTodoListView() {
  const todos = useTodos();
  const todoActions = useTodoActions();

  useEffect(() => {
    todoActions.handleFetchTodos();
  }, []);

  return (
    <TodoListView
      handleAddTodo={todoActions.handleAddTodo}
      handleDeleteTodo={todoActions.handleDeleteTodo}
      handleUpdateTodo={todoActions.handleUpdateTodo}
      todos={todos}
    />
  );
}

export default ReduxTodoListView;
