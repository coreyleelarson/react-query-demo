/* eslint-disable react/jsx-handler-names */
import React from 'react';
import Spinner from 'client/components/spinner';
import TodoList from 'client/components/todo-list';
import { useTodos, useTodoActions } from '../../hooks/todo';

function ReactQueryTodoList() {
  const todos = useTodos();
  const todoActions = useTodoActions();

  if (todos.isLoading) return <Spinner />;

  return (
    <TodoList
      handleAddTodo={todoActions.addTodo}
      handleDeleteTodo={todoActions.deleteTodo}
      handleUpdateTodo={todoActions.updateTodo}
      todos={todos.data}
    />
  );
}

export default ReactQueryTodoList;
