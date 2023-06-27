import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "../../actions/usersAction";
import { User, Users } from "./type";

const initialState: Users = {
    users: [],
    error: undefined,
    isLoading: false
}

const sliceUsers = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.isLoading = false,
            state.users = action.payload
        });
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.isLoading = false,
            state.users = [],
            state.error = action.error.message
        });
    }
})

export default sliceUsers.reducer;