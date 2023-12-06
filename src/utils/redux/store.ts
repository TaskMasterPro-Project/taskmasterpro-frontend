import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import usersSlice, { UsersSliceState } from "./users";
import projectsSlice, { ProjectsSliceState } from "./projects";

type StoreState = {
    users: UsersSliceState;
    projects: ProjectsSliceState;
};

const store = configureStore({
    reducer: {
        users: usersSlice,
        projects: projectsSlice
    },
});

export default store;
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
