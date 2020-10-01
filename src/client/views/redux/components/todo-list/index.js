/* eslint-disable react/jsx-handler-names */
import React, { useEffect } from 'react';
import TodoListView from 'client/components/todo-list';
import { useTodos, useTodoActions } from '../../hooks/todo';

function ReduxTodoListView() {
  const todos = useTodos();
  const todoActions = useTodoActions();

  useEffect(() => {
    todoActions.fetchTodos();
  }, []);

  return (
    <TodoListView
      handleAddTodo={todoActions.addTodo}
      handleDeleteTodo={todoActions.deleteTodo}
      handleUpdateTodo={todoActions.updateTodo}
      todos={todos}
    />
  );
}

export default ReduxTodoListView;
