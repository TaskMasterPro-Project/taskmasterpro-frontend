// import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';
// import { Task } from '../models/Task'

// export interface ProjectsSliceState {
//   tasks: Task[] | null;
// }

// const initialState: ProjectsSliceState = {
//   tasks: null
// };


// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//       setSelectedProject(state, action: PayloadAction<Task[]>) {
//           state.selectedProject = action.payload;
//       },
//   },
//   // extraReducers: (builder) => {
//   //   builder.addCase(addNewTask.fulfilled, (state, action) => {
//   //     getTasksForProject(state.selectedProject.id)
//   //   })
//   // }
// });