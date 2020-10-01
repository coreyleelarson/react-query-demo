import { useMutation, useQuery, useQueryCache } from 'react-query';
import ProjectService from 'client/services/project';

const useProjects = () => {
  const { data = [] } = useQuery('projects', ProjectService.getProjects);
  return data;
};

const useProjectActions = () => {
  const queryCache = useQueryCache();
  const onSuccessHandler = () => {
    queryCache.invalidateQueries('projects');
  };
  const [handleAddProject] = useMutation(ProjectService.addProject, {
    onSuccess: onSuccessHandler,
  });
  const [handleDeleteProject] = useMutation(ProjectService.deleteProject, {
    onSuccess: onSuccessHandler,
  });
  return { handleAddProject, handleDeleteProject };
};

export { useProjects, useProjectActions };
