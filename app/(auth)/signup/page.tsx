import { Metadata } from 'next'
import { SignupForm } from './SignupForm'

export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'Create your Chasingheights account',
    robots: { index: false, follow: false },
}

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-gray-100 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">
                <SignupForm />
            </div>
        </div>
    )
}
