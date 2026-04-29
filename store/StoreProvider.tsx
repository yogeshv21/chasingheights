'use client'

import { useRef, useEffect } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from './index'
import { setUser } from '@/features/auth/authSlice'

export function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            try {
                storeRef.current?.dispatch(setUser(JSON.parse(storedUser)))
            } catch (error) {
                console.error('Failed to parse stored user:', error)
            }
        }
    }, [])

    return <Provider store={storeRef.current}>{children}</Provider>
}
