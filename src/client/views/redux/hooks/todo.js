import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  updateTodo,
} from '../state/modules/todo';

const useTodos = () => {
  return useSelector((state) => state.todo.list);
};

const useTodoActions = () => {
  const dispatch = useDispatch();
  const handleAddTodo = (values) => dispatch(addTodo(values));
  const handleDeleteTodo = (id) => dispatch(deleteTodo(id));
  const handleFetchTodos = () => dispatch(fetchTodos());
  const handleUpdateTodo = ({ id, ...values }) =>
    dispatch(updateTodo(id, values));
  return {
    handleAddTodo,
    handleFetchTodos,
    handleDeleteTodo,
    handleUpdateTodo,
  };
};

export { useTodos, useTodoActions };
