import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getTasksForProject } from "../axios/apiClient";
import { User } from "../models/User";
import { Project } from "../models/Project";

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
    // extraReducers: (builder) => {
    //   builder.addCase(addNewTask.fulfilled, (state, action) => {
    //     getTasksForProject(state.selectedProject.id)
    //   })
    // }
});

// Maybe it should be managed in a seperate tasks slice 
export const addNewTask =createAsyncThunk(
  'projects/addNewTask',
  async (task, thunkAPI) => {
    try{
      const response = await axios.post('http://localhost:3004/tasks', task);
      return response.data;
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        // Handling Axios errors
        return thunkAPI.rejectWithValue(error.response?.data);
      } else {
        // Handle non-Axios errors
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
)

export const { setSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;
