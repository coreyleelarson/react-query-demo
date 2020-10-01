/* eslint-disable react/jsx-handler-names */
import React from 'react';
import ProjectListView from 'client/views/project-list';
import { useProjects, useProjectActions } from '../../hooks/project';

function ReactQueryProjectListView() {
  const projects = useProjects();
  const projectActions = useProjectActions();

  return (
    <ProjectListView
      handleAddProject={projectActions.handleAddProject}
      handleDeleteProject={projectActions.handleDeleteProject}
      projects={projects}
    />
  );
}

export default ReactQueryProjectListView;
