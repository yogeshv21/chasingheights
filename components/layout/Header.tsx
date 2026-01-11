'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Mountain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/store/hooks'
import { APP_ROUTES } from '@/lib/constants/routes'

export function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { isAuthenticated, user } = useAppSelector((state) => state.auth)

    const navigation = [
        { name: 'Home', href: APP_ROUTES.HOME },
        { name: 'Treks', href: APP_ROUTES.TREKS },
        { name: 'About', href: APP_ROUTES.ABOUT },
        { name: 'Blog', href: APP_ROUTES.BLOG },
        { name: 'Contact', href: APP_ROUTES.CONTACT },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href={APP_ROUTES.HOME} className="flex items-center space-x-2">
                        <Mountain className="h-8 w-8 text-emerald-600" />
                        <span className="text-xl font-bold text-gray-900">Chasingheights</span>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Toggle menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Desktop navigation */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm leading-6 transition-colors ${isActive
                                    ? 'font-bold text-gray-900 border-b-2 border-emerald-600'
                                    : 'font-semibold text-gray-900 hover:text-emerald-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </div>

                {/* Auth buttons */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                    {isAuthenticated ? (
                        <>
                            <span className="text-sm text-gray-700">Hi, {user?.name}</span>
                            <Button variant="ghost" asChild>
                                <Link href={APP_ROUTES.DASHBOARD}>Dashboard</Link>
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="ghost" asChild>
                                <Link href={APP_ROUTES.LOGIN}>Sign In</Link>
                            </Button>
                            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                                <Link href={APP_ROUTES.SIGNUP}>Sign Up</Link>
                            </Button>
                        </>
                    )}
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block rounded-md px-3 py-2 text-base ${isActive
                                        ? 'font-bold text-gray-900 bg-emerald-50 border-l-4 border-emerald-600'
                                        : 'font-medium text-gray-900 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                        <div className="mt-4 space-y-2">
                            {isAuthenticated ? (
                                <Button variant="outline" className="w-full" asChild>
                                    <Link href={APP_ROUTES.DASHBOARD}>Dashboard</Link>
                                </Button>
                            ) : (
                                <>
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href={APP_ROUTES.LOGIN}>Sign In</Link>
                                    </Button>
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                                        <Link href={APP_ROUTES.SIGNUP}>Sign Up</Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
