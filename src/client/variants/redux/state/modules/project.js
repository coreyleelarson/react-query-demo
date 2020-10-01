import { createSlice } from '@reduxjs/toolkit';
import ProjectService from 'client/services/project';

const projectSlice = createSlice({
  name: 'project',
  initialState: { list: [] },
  reducers: {
    setProjectDetail(state, action) {
      state.detail = action.payload;
    },
    setProjectList(state, action) {
      state.list = action.payload;
    },
  },
});

const { setProjectDetail, setProjectList } = projectSlice.actions;

const addProject = (values) => async (dispatch) => {
  await ProjectService.addProject(values);
  dispatch(fetchProjects());
};

const fetchProject = (id) => async (dispatch) => {
  dispatch(setProjectDetail(await ProjectService.getProject(id)));
};

const fetchProjects = () => async (dispatch) => {
  dispatch(setProjectList(await ProjectService.getProjects()));
};

const deleteProject = (id) => async (dispatch) => {
  await ProjectService.deleteProject(id);
  dispatch(fetchProjects());
};

export { addProject, deleteProject, fetchProject, fetchProjects };
export default projectSlice.reducer;
