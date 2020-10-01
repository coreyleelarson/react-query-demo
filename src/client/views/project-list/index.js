import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AddProjectModal from 'client/components/add-project-modal';
import ProjectDetailModal from 'client/components/project-detail-modal';
import ProjectListTable from 'client/components/project-list-table';
import styles from './styles.module.css';

function ProjectListView({
  handleAddProject,
  handleDeleteProject,
  handleSelectProject,
  project,
  projects,
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  const onSelect = (id) => {
    setIsViewing(true);
    handleSelectProject(id);
  };

  const onSubmit = async (values) => {
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
      <ProjectListTable
        onDelete={handleDeleteProject}
        onSelect={onSelect}
        projects={projects}
      />
      <AddProjectModal
        isOpen={isAdding}
        onClose={() => setIsAdding(false)}
        onSubmit={onSubmit}
      />
      <ProjectDetailModal
        isOpen={isViewing}
        onClose={() => setIsViewing(false)}
        project={project}
      />
    </main>
  );
}
ProjectListView.propTypes = {
  handleAddProject: PropTypes.func,
  handleDeleteProject: PropTypes.func,
  handleSelectProject: PropTypes.func,
  project: PropTypes.object,
  projects: PropTypes.array,
};

export default ProjectListView;
