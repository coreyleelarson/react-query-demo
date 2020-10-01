import { useMutation, useQuery, useQueryCache } from 'react-query';
import ProjectService from 'client/services/project';

const useProject = (id) => {
  const { data = {} } = useQuery(['projects', id], () =>
    ProjectService.getProject(id)
  );
  return data;
};

const useProjects = () => {
  const { data = [] } = useQuery('projects', ProjectService.getProjects);
  return data;
};

const useProjectActions = () => {
  const queryCache = useQueryCache();
  const [handleAddProject] = useMutation(ProjectService.addProject, {
    onSuccess: () => {
      queryCache.invalidateQueries('projects');
    },
  });
  const [handleDeleteProject] = useMutation(ProjectService.deleteProject, {
    onSuccess: () => {
      queryCache.invalidateQueries('projects');
    },
  });
  return { handleAddProject, handleDeleteProject };
};

export { useProject, useProjects, useProjectActions };
