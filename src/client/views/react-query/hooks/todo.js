import { useMutation, useQuery, useQueryCache } from 'react-query';
import * as TodoService from 'client/services/todo';

const useTodos = () => {
  return useQuery('todos', TodoService.getTodos);
};

const useTodoActions = () => {
  const queryCache = useQueryCache();
  const mutateOptions = {
    onSuccess: () => queryCache.invalidateQueries('todos'),
  };
  const [addTodo] = useMutation(TodoService.addTodo, mutateOptions);
  const [updateTodo] = useMutation(
    ({ id, ...values }) => TodoService.updateTodo(id, values),
    mutateOptions
  );
  const [deleteTodo] = useMutation(TodoService.deleteTodo, mutateOptions);
  return { addTodo, updateTodo, deleteTodo };
};

export { useTodos, useTodoActions };
