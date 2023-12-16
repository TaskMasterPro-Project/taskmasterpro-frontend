import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { User } from "../models/User";
import { Task } from "../models/Task";
import { Project } from "../models/Project";
import { createTaskForProject } from "../axios/apiClient";
import { RootState } from "./store";

export interface ProjectsSliceState {
    selectedProject?: Project;
}

const initialState: ProjectsSliceState = {
    selectedProject: undefined
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setSelectedProject(state, action: PayloadAction<Project>) {
            state.selectedProject = action.payload;
        },
    },

});

export const createTask = createAsyncThunk(
  'projects/createTask',
  async (taskData: Task, { getState }) => {
    const state = getState() as RootState;
    const projectId = state.projects.selectedProject?.id;
    if (!projectId) {
      throw new Error("No project selected");
    }
    const response = createTaskForProject(projectId, taskData);
    return response;
  }
);

export const { setSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;
