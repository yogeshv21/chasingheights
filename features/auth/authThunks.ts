import { createAsyncThunk } from '@reduxjs/toolkit'
import type { LoginCredentials, SignupCredentials, User } from '@/types/user'

// Mock authentication - replace with real API calls
export const loginThunk = createAsyncThunk<
    User,
    LoginCredentials,
    { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock successful login
        const user: User = {
            id: '1',
            email: credentials.email,
            name: 'John Doe',
            created_at: new Date().toISOString(),
        }

        return user
    } catch (error) {
        return rejectWithValue('Invalid credentials')
    }
})

export const signupThunk = createAsyncThunk<
    User,
    SignupCredentials,
    { rejectValue: string }
>('auth/signup', async (credentials, { rejectWithValue }) => {
    try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock successful signup
        const user: User = {
            id: '1',
            email: credentials.email,
            name: credentials.name,
            created_at: new Date().toISOString(),
        }

        return user
    } catch (error) {
        return rejectWithValue('Signup failed')
    }
})

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    return
})
