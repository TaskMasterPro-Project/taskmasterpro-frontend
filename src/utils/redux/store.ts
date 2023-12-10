import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import usersSlice, { UsersSliceState } from "./users";
import projectsSlice, { ProjectsSliceState } from "./projects";
import createTaskModalSlice, {CreateTaskModalState} from "./createTaskModal"
import TaskModalSlice, {TaskModalState} from "./taskModal"

type StoreState = {
    users: UsersSliceState;
    projects: ProjectsSliceState;
    createTaskModal: CreateTaskModalState;
    taskModal: TaskModalState;
};

// save to localStorage
const saveToLocalStorage = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.error("Could not save state", e);
    }
};

// load from localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state", e);
        return undefined;
    }
};

const persistedState = loadFromLocalStorage();

const store = configureStore({
    reducer: {
        users: usersSlice,
        projects: projectsSlice,
        createTaskModal: createTaskModalSlice,
        taskModal: TaskModalSlice
    },
    preloadedState: persistedState
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
