import * as ApiService from './api';

const getTodos = async () => {
  const response = await ApiService.getRequest('/api/todos');
  return response.todos;
};

const addTodo = async (values) => {
  const response = await ApiService.postRequest('/api/todos', values);
  return response.todo;
};

const updateTodo = async (id, values) => {
  const response = await ApiService.postRequest(`/api/todos/${id}`, values);
  return response.todo;
};

const deleteTodo = async (id) => {
  await ApiService.deleteRequest(`/api/todos/${id}`);
};

export { getTodos, addTodo, updateTodo, deleteTodo };
