import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/User";

export interface UsersSliceState {
    user: User | null;
}

const initialState: UsersSliceState = {
    user: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = usersSlice.actions;
export default usersSlice.reducer;
