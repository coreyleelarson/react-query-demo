import ApiService from './api';

class ProjectService extends ApiService {
  static getProjects = async () => {
    const response = await this.getRequest('/api/projects');
    return response.projects;
  };

  static getProject = async (id) => {
    const response = await this.getRequest(`/api/projects/${id}`);
    return response.project;
  };

  static addProject = async (values) => {
    const response = await this.postRequest('/api/projects', values);
    return response.project;
  };

  static deleteProject = async (id) => {
    await this.deleteRequest(`/api/projects/${id}`);
  };
}

export default ProjectService;
