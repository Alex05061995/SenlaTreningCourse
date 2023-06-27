import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../types/userTypes';
import allActions from '../../actions';

interface UsersType {
  isLoading: boolean;
  users: User[];
  error: string;
}

const initialState:UsersType = {
  isLoading: false,
  users: [],
  error: '',
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allActions.allUsers.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(allActions.allUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = ''
    })

    builder.addCase(allActions.allUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.payload as string
    })
  }
})