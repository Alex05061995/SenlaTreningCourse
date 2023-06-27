import { createAsyncThunk } from "@reduxjs/toolkit"
import { Users } from "../reducers/userReducer/type";

export const fetchUserById = createAsyncThunk(
    'users/getUsers',
    // Declare the type your function argument here:
    async (_, { rejectWithValue }) => {
       try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`).then(data => data.json())
        return response
       } catch (error) {
        return rejectWithValue(error)
       }
    }
)

