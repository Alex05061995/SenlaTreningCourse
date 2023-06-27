import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '../../../types/userTypes'

export const fetchUser = createAsyncThunk(
  'users/getAll',
  // Declare the type your function argument here:
  async (_, { rejectWithValue }) => {
    try {
      const response: User[] = await fetch(`https://jsonplaceholder.typicode.com/users`).then(data => data.json())
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)