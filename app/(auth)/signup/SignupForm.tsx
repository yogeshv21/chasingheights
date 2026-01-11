'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { signupThunk } from '@/features/auth/authThunks'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Lock, User, Mountain } from 'lucide-react'
import { APP_ROUTES } from '@/lib/constants/routes'

export function SignupForm() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { loading, error } = useAppSelector((state) => state.auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await dispatch(signupThunk({ name, email, password }))

        if (signupThunk.fulfilled.match(result)) {
            router.push(APP_ROUTES.DASHBOARD)
        }
    }

    return (
        <Card className="shadow-xl">
            <CardHeader className="space-y-4">
                <div className="flex justify-center">
                    <div className="bg-emerald-100 p-3 rounded-full">
                        <Mountain className="h-8 w-8 text-emerald-600" />
                    </div>
                </div>
                <CardTitle className="text-2xl text-center">Create Account</CardTitle>
                <CardDescription className="text-center">Start your adventure with Chasingheights</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-md text-sm">
                            {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="pl-10"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10"
                                required
                                minLength={6}
                            />
                        </div>
                        <p className="text-xs text-gray-500">Must be at least 6 characters</p>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700"
                        disabled={loading}
                    >
                        {loading ? 'Creating account...' : 'Sign Up'}
                    </Button>

                    <div className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link href={APP_ROUTES.LOGIN} className="text-emerald-600 hover:underline font-semibold">
                            Sign in
                        </Link>
                    </div>

                    <div className="text-center">
                        <Link href={APP_ROUTES.HOME} className="text-sm text-gray-600 hover:text-emerald-600">
                            ← Back to home
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
