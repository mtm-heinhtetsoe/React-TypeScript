import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

export interface AuthState {
  user_id: number;
  user_name: string;
  user_type: string;
  token_type: string;
  access_token: string;
  expires_at: string;
}

const initialState: AuthState = {
  access_token: '',
  user_id: 0,
  user_name: '',
  user_type: '',
  token_type: 'Bearer',
  expires_at: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
        state.access_token = action.payload.access_token;
        state.user_id = action.payload.user_id;
        state.user_name = action.payload.user_name;
        state.user_type = action.payload.user_type;
        state.token_type = action.payload.token_type;
        state.expires_at = action.payload.expires_at;
    },
    logout: (state) => state = initialState,
  },
});

export const { login, logout } = authSlice.actions;

export const getToken = (state: RootState) => state.auth.access_token;

export const getUsername = (state: RootState) => state.auth.user_name;

export const getUserType = (state: RootState) => state.auth.user_type;

export const Logout = (): AppThunk => (dispatch: any, getState: any) => {
    const currentToken = getToken(getState());
    if (currentToken) {
        dispatch(logout());
    }
};

export default authSlice.reducer;
