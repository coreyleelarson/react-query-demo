import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../state/modules/todo';

const useTodos = () => {
  return useSelector((state) => state.todo.list);
};

const useTodoActions = () => {
  const dispatch = useDispatch();
  const addTodo = (values) => dispatch(actions.addTodo(values));
  const deleteTodo = (id) => dispatch(actions.deleteTodo(id));
  const fetchTodos = () => dispatch(actions.fetchTodos());
  const updateTodo = ({ id, ...values }) =>
    dispatch(actions.updateTodo(id, values));
  return {
    addTodo,
    deleteTodo,
    fetchTodos,
    updateTodo,
  };
};

export { useTodos, useTodoActions };
