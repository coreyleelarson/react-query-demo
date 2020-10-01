import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AddProjectModal from 'client/components/add-project-modal';
import ProjectListTable from 'client/components/project-list-table';
import styles from './styles.module.css';

function ProjectListView({ handleAddProject, handleDeleteProject, projects }) {
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = async (values) => {
    await handleAddProject(values);
    setIsAdding(false);
  };

  return (
    <main>
      <header className={styles.header}>
        <h2>Projects</h2>
        <div>
          <Button
            color="primary"
            onClick={() => setIsAdding(true)}
            variant="contained"
          >
            Add Project
          </Button>
        </div>
      </header>
      <ProjectListTable onDelete={handleDeleteProject} projects={projects} />
      <AddProjectModal
        isOpen={isAdding}
        onClose={() => setIsAdding(false)}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
ProjectListView.propTypes = {
  handleAddProject: PropTypes.func,
  handleDeleteProject: PropTypes.func,
  projects: PropTypes.array,
};

export default ProjectListView;
