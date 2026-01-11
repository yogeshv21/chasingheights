import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
    sidebarOpen: boolean
    mobileMenuOpen: boolean
    searchOpen: boolean
    currentModal: string | null
}

const initialState: UIState = {
    sidebarOpen: false,
    mobileMenuOpen: false,
    searchOpen: false,
    currentModal: null,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen
        },
        toggleMobileMenu: (state) => {
            state.mobileMenuOpen = !state.mobileMenuOpen
        },
        toggleSearch: (state) => {
            state.searchOpen = !state.searchOpen
        },
        openModal: (state, action: PayloadAction<string>) => {
            state.currentModal = action.payload
        },
        closeModal: (state) => {
            state.currentModal = null
        },
    },
})

export const { toggleSidebar, toggleMobileMenu, toggleSearch, openModal, closeModal } =
    uiSlice.actions
export default uiSlice.reducer
