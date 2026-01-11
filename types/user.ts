export interface User {
    id: string
    email: string
    name: string
    phone?: string
    created_at: string
}

export interface AuthState {
    user: User | null
    isAuthenticated: boolean
    loading: boolean
    error: string | null
}

export interface LoginCredentials {
    email: string
    password: string
}

export interface SignupCredentials {
    email: string
    password: string
    name: string
}
