import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/User";

export interface ProjectsSliceState {
    selectedProjectId?: number;
}

const initialState: ProjectsSliceState = {
    selectedProjectId: undefined
};

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setSelectedProjectId(state, action: PayloadAction<number>) {
            state.selectedProjectId = action.payload;
        },
    },
});

export const { setSelectedProjectId } = projectsSlice.actions;
export default projectsSlice.reducer;
