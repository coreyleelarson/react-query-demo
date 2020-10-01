import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectListView from 'client/views/project-list';
import {
  addProject,
  deleteProject,
  fetchProjects,
} from '../../state/modules/project';

function ReduxProjectListView() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.project.list);

  const handleAddProject = (name) => dispatch(addProject(name));
  const handleDeleteProject = (id) => dispatch(deleteProject(id));

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <ProjectListView
      handleAddProject={handleAddProject}
      handleDeleteProject={handleDeleteProject}
      projects={projects}
    />
  );
}

export default ReduxProjectListView;
