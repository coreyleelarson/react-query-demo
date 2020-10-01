/* eslint-disable react/jsx-handler-names */
import React, { useEffect } from 'react';
import ProjectListView from 'client/views/project-list';
import { useProjects, useProjectActions } from '../../hooks/project';

function ReduxProjectListView() {
  const projects = useProjects();
  const projectActions = useProjectActions();

  useEffect(() => {
    projectActions.handleFetchProjects();
  }, []);

  return (
    <ProjectListView
      handleAddProject={projectActions.handleAddProject}
      handleDeleteProject={projectActions.handleDeleteProject}
      projects={projects}
    />
  );
}

export default ReduxProjectListView;
