import React from 'react';
import { useMutation, useQuery, useQueryCache } from 'react-query';
import ProjectService from 'client/services/project';
import ProjectListView from 'client/views/project-list';

function ReactQueryProjectListView() {
  const queryCache = useQueryCache();
  const { data = [] } = useQuery('projects', ProjectService.getProjects);
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

  return (
    <ProjectListView
      handleAddProject={handleAddProject}
      handleDeleteProject={handleDeleteProject}
      projects={data}
    />
  );
}

export default ReactQueryProjectListView;
