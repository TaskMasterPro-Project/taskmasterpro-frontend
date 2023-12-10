// src/redux/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

export interface TaskModalState {
  isTaskModalOpen: boolean;
}

const initialState: TaskModalState = {
  isTaskModalOpen: false,
};

const TaskModalSlice = createSlice({
  name: 'TaskModal',
  initialState,
  reducers: {
    openTaskModal: (state) => {
      state.isTaskModalOpen = true;
    },
    closeTaskModal: (state) => {
      state.isTaskModalOpen = false;
    },
  },
});

export const { openTaskModal, closeTaskModal } = TaskModalSlice.actions;
export default TaskModalSlice.reducer;