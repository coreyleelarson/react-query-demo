import ApiService from './api';

class TodoService extends ApiService {
  static getTodos = async () => {
    const response = await this.getRequest('/api/todos');
    return response.todos;
  };

  static addTodo = async (values) => {
    const response = await this.postRequest('/api/todos', values);
    return response.todo;
  };

  static updateTodo = async (id, values) => {
    const response = await this.postRequest(`/api/todos/${id}`, values);
    return response.todo;
  };

  static deleteTodo = async (id) => {
    await this.deleteRequest(`/api/todos/${id}`);
  };
}

export default TodoService;
