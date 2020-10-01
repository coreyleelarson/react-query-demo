import { useDispatch, useSelector } from 'react-redux';
import {
  addProject,
  deleteProject,
  fetchProjects,
} from '../state/modules/project';

const useProjects = () => {
  return useSelector((state) => state.project.list);
};

const useProjectActions = () => {
  const dispatch = useDispatch();
  const handleAddProject = (name) => dispatch(addProject(name));
  const handleDeleteProject = (id) => dispatch(deleteProject(id));
  const handleFetchProjects = () => dispatch(fetchProjects());
  return { handleAddProject, handleFetchProjects, handleDeleteProject };
};

export { useProjects, useProjectActions };
