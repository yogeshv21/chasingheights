import { Metadata } from 'next'
import { LoginForm } from './LoginForm'

export const metadata: Metadata = {
    title: 'Login',
    description: 'Sign in to your Chasingheights account',
    robots: { index: false, follow: false },
}

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-gray-100 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                <LoginForm />
            </div>
        </div>
    )
}
