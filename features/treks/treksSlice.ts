import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Trek, TrekFilters } from '@/types/trek'
import { fetchTreksThunk, fetchTrekByIdThunk } from './treksThunks'

interface TreksState {
    treks: Trek[]
    currentTrek: Trek | null
    filters: TrekFilters
    loading: boolean
    error: string | null
}

const initialState: TreksState = {
    treks: [],
    currentTrek: null,
    filters: {},
    loading: false,
    error: null,
}

const treksSlice = createSlice({
    name: 'treks',
    initialState,
    reducers: {
        setFilters: (state, action: PayloadAction<TrekFilters>) => {
            state.filters = { ...state.filters, ...action.payload }
        },
        clearFilters: (state) => {
            state.filters = {}
        },
        clearCurrentTrek: (state) => {
            state.currentTrek = null
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch treks
            .addCase(fetchTreksThunk.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTreksThunk.fulfilled, (state, action) => {
                state.loading = false
                state.treks = action.payload
            })
            .addCase(fetchTreksThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to fetch treks'
            })
            // Fetch trek by ID
            .addCase(fetchTrekByIdThunk.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTrekByIdThunk.fulfilled, (state, action) => {
                state.loading = false
                state.currentTrek = action.payload
            })
            .addCase(fetchTrekByIdThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to fetch trek'
            })
    },
})

export const { setFilters, clearFilters, clearCurrentTrek } = treksSlice.actions
export default treksSlice.reducer
