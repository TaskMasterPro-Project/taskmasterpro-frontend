import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import usersSlice, { UsersSliceState } from "./users";

type StoreState = {
    users: UsersSliceState;
};

const store = configureStore({
    reducer: {
        users: usersSlice,
    },
});

export default store;
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;
