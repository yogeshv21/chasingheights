'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { logoutThunk } from '@/features/auth/authThunks'
import { APP_ROUTES } from '@/lib/constants/routes'
import { User, Calendar, LogOut } from 'lucide-react'

export default function DashboardPage() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { isAuthenticated, user } = useAppSelector((state) => state.auth)

    useEffect(() => {
        if (!isAuthenticated) {
            router.push(APP_ROUTES.LOGIN)
        }
    }, [isAuthenticated, router])

    const handleLogout = async () => {
        await dispatch(logoutThunk())
        router.push(APP_ROUTES.HOME)
    }

    if (!isAuthenticated) {
        return null
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
                        </div>
                        <Button variant="outline" onClick={handleLogout}>
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <User className="w-5 h-5" />
                                    <span>Profile</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-semibold">Name:</span> {user?.name}</p>
                                    <p><span className="font-semibold">Email:</span> {user?.email}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>My Bookings</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm">No bookings yet. Start exploring!</p>
                                <Button className="mt-4 w-full bg-emerald-600" asChild>
                                    <a href={APP_ROUTES.TREKS}>Browse Treks</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Button variant="outline" className="w-full" asChild>
                                        <a href={APP_ROUTES.TREKS}>Browse Treks</a>
                                    </Button>
                                    <Button variant="outline" className="w-full" asChild>
                                        <a href={APP_ROUTES.CONTACT}>Contact Support</a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
