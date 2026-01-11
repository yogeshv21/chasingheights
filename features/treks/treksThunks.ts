import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Trek, TrekFilters } from '@/types/trek'
import { DUMMY_TREKS, getTrekById as getDataTrekById, getTreksByCategory as getDataTreksByCategory } from '@/data/dummyData'

export const fetchTreksThunk = createAsyncThunk<Trek[], TrekFilters | undefined>(
    'treks/fetchTreks',
    async (filters) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500))

        let treks = [...DUMMY_TREKS]

        // Apply filters
        if (filters?.category) {
            treks = getDataTreksByCategory(filters.category)
        }

        if (filters?.searchQuery) {
            const query = filters.searchQuery.toLowerCase()
            treks = treks.filter(
                (trek) =>
                    trek.title.toLowerCase().includes(query) ||
                    trek.location.toLowerCase().includes(query)
            )
        }

        if (filters?.difficulty) {
            treks = treks.filter((trek) => trek.difficulty === filters.difficulty)
        }

        if (filters?.minCost !== undefined) {
            treks = treks.filter((trek) => trek.cost >= filters.minCost!)
        }

        if (filters?.maxCost !== undefined) {
            treks = treks.filter((trek) => trek.cost <= filters.maxCost!)
        }

        return treks
    }
)

export const fetchTrekByIdThunk = createAsyncThunk<Trek | null, string>(
    'treks/fetchTrekById',
    async (id) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 300))

        const trek = getDataTrekById(id)
        return trek || null
    }
)
