import { createSlice } from '@reduxjs/toolkit';
import ProjectService from 'client/services/project';

const projectSlice = createSlice({
  name: 'project',
  initialState: { list: [] },
  reducers: {
    setProjectList(state, action) {
      state.list = action.payload;
    },
  },
});

const { setProjectList } = projectSlice.actions;

const addProject = (values) => async (dispatch) => {
  await ProjectService.addProject(values);
  dispatch(fetchProjects());
};

const fetchProjects = () => async (dispatch) => {
  dispatch(setProjectList(await ProjectService.getProjects()));
};

const deleteProject = (id) => async (dispatch) => {
  await ProjectService.deleteProject(id);
  dispatch(fetchProjects());
};

export { addProject, deleteProject, fetchProjects };
export default projectSlice.reducer;
