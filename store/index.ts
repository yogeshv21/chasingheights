import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/features/auth/authSlice'
import treksReducer from '@/features/treks/treksSlice'
import bookingsReducer from '@/features/bookings/bookingsSlice'
import uiReducer from '@/features/ui/uiSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authReducer,
            treks: treksReducer,
            bookings: bookingsReducer,
            ui: uiReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    // Ignore these paths in the state for serialization checks
                    ignoredActions: ['auth/login/fulfilled'],
                    ignoredPaths: ['auth.user.metadata'],
                },
            }),
        devTools: process.env.NODE_ENV !== 'production',
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
