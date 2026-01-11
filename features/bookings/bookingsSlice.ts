import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Booking } from '@/types/booking'

interface BookingsState {
    bookings: Booking[]
    loading: boolean
    error: string | null
}

const initialState: BookingsState = {
    bookings: [],
    loading: false,
    error: null,
}

const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        setBookings: (state, action: PayloadAction<Booking[]>) => {
            state.bookings = action.payload
        },
        addBooking: (state, action: PayloadAction<Booking>) => {
            state.bookings.push(action.payload)
        },
        updateBooking: (state, action: PayloadAction<Booking>) => {
            const index = state.bookings.findIndex((b) => b.id === action.payload.id)
            if (index !== -1) {
                state.bookings[index] = action.payload
            }
        },
        removeBooking: (state, action: PayloadAction<string>) => {
            state.bookings = state.bookings.filter((b) => b.id !== action.payload)
        },
    },
})

export const { setBookings, addBooking, updateBooking, removeBooking } = bookingsSlice.actions
export default bookingsSlice.reducer
