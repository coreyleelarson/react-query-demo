import { useMutation, useQuery, useQueryCache } from 'react-query';
import TodoService from 'client/services/todo';

const useTodos = () => {
  const { data = [] } = useQuery('todos', TodoService.getTodos);
  return data;
};

const useTodoActions = () => {
  const queryCache = useQueryCache();
  const [handleAddTodo] = useMutation(TodoService.addTodo, {
    onSuccess: () => {
      queryCache.invalidateQueries('todos');
    },
  });
  const [handleUpdateTodo] = useMutation(
    ({ id, ...values }) => TodoService.updateTodo(id, values),
    {
      onSuccess: () => {
        queryCache.invalidateQueries('todos');
      },
    }
  );
  const [handleDeleteTodo] = useMutation(TodoService.deleteTodo, {
    onSuccess: () => {
      queryCache.invalidateQueries('todos');
    },
  });
  return { handleAddTodo, handleDeleteTodo, handleUpdateTodo };
};

export { useTodos, useTodoActions };
