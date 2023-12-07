import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
});

export const { setSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;
