import { useMutation, useQuery, useQueryCache } from 'react-query';
import TodoService from 'client/services/todo';

const useTodos = () => {
  const { data = [] } = useQuery('todos', TodoService.getTodos);
  return data;
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
