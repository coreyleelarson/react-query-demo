import { useDispatch, useSelector } from 'react-redux';
import {
  addProject,
  deleteProject,
  fetchProject,
  fetchProjects,
} from '../state/modules/project';

const useProject = () => {
  return useSelector((state) => state.project.detail);
};

const useProjects = () => {
  return useSelector((state) => state.project.list);
};

const useProjectActions = () => {
  const dispatch = useDispatch();
  const handleAddProject = (name) => dispatch(addProject(name));
  const handleDeleteProject = (id) => dispatch(deleteProject(id));
  const handleFetchProject = (id) => dispatch(fetchProject(id));
  const handleFetchProjects = () => dispatch(fetchProjects());
  return {
    handleAddProject,
    handleDeleteProject,
    handleFetchProject,
    handleFetchProjects,
  };
};

export { useProject, useProjects, useProjectActions };
