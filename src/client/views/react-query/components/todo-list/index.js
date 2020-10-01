/* eslint-disable react/jsx-handler-names */
import React from 'react';
import TodoList from 'client/components/todo-list';
import { useTodos, useTodoActions } from '../../hooks/todo';

function ReactQueryTodoList() {
  const todos = useTodos();
  const todoActions = useTodoActions();

  return (
    <TodoList
      handleAddTodo={todoActions.handleAddTodo}
      handleDeleteTodo={todoActions.handleDeleteTodo}
      handleUpdateTodo={todoActions.handleUpdateTodo}
      todos={todos}
    />
  );
}

export default ReactQueryTodoList;
