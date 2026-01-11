import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginThunk, signupThunk, logoutThunk } from './authThunks'
import type { User } from '@/types/user'

interface AuthState {
    user: User | null
    isAuthenticated: boolean
    loading: boolean
    error: string | null
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            state.isAuthenticated = true
        },
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(loginThunk.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false
                state.isAuthenticated = true
                state.user = action.payload
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || 'Login failed'
            })
            // Signup
            .addCase(signupThunk.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(signupThunk.fulfilled, (state, action) => {
                state.loading = false
                state.isAuthenticated = true
                state.user = action.payload
            })
            .addCase(signupThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || 'Signup failed'
            })
            // Logout
            .addCase(logoutThunk.fulfilled, (state) => {
                state.user = null
                state.isAuthenticated = false
                state.loading = false
                state.error = null
            })
    },
})

export const { clearError, setUser } = authSlice.actions
export default authSlice.reducer
