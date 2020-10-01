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

export const fetchProjects = () => async (dispatch) => {
  dispatch(setProjectList(await ProjectService.getProjects()));
};

export const addProject = (values) => async (dispatch) => {
  await ProjectService.addProject(values);
  dispatch(fetchProjects());
};

export const deleteProject = (id) => async (dispatch) => {
  await ProjectService.deleteProject(id);
  dispatch(fetchProjects());
};

export default projectSlice.reducer;
