/* eslint-disable react/jsx-handler-names */
import React, { useEffect, useState } from 'react';
import ProjectListView from 'client/views/project-list';
import {
  useProject,
  useProjects,
  useProjectActions,
} from '../../hooks/project';

function ReduxProjectListView() {
  const [projectId, setProjectId] = useState();
  const project = useProject();
  const projects = useProjects();
  const projectActions = useProjectActions();

  useEffect(() => {
    projectActions.handleFetchProjects();
  }, []);

  useEffect(() => {
    if (projectId) {
      projectActions.handleFetchProject(projectId);
    }
  }, [projectId]);

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

export default ReduxProjectListView;
