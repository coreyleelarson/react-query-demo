/* eslint-disable react/jsx-handler-names */
import React, { useState } from 'react';
import ProjectListView from 'client/views/project-list';
import {
  useProject,
  useProjects,
  useProjectActions,
} from '../../hooks/project';

function ReactQueryProjectListView() {
  const [projectId, setProjectId] = useState();
  const project = useProject(projectId);
  const projects = useProjects();
  const projectActions = useProjectActions();

  return (
    <ProjectListView
      handleAddProject={projectActions.handleAddProject}
      handleDeleteProject={projectActions.handleDeleteProject}
      handleSelectProject={setProjectId}
      project={project}
      projects={projects}
    />
  );
}

export default ReactQueryProjectListView;
