import ApiService from './api';

class UserService extends ApiService {
  static getUsers = async () => {
    const response = await this.getRequest('/api/users');
    return response.users;
  };

  static addUser = async (values) => {
    const response = await this.postRequest('/api/users', values);
    return response.user;
  };

  static deleteUser = async (id) => {
    await this.deleteRequest(`/api/users/${id}`);
  };
}

export default UserService;
