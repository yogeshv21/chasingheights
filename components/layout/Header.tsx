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
        { name: 'Blog', href: APP_ROUTES.BLOG },
        { name: 'Contact', href: APP_ROUTES.CONTACT },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all duration-300">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12" aria-label="Global">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href={APP_ROUTES.HOME} className="flex items-center space-x-2.5 group">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-emerald-500/20 rounded-full blur-sm group-hover:bg-emerald-500/40 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            <Mountain className="relative h-8 w-8 text-emerald-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                        </div>
                        <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                            Chasing<span className="text-emerald-600">heights</span>
                        </span>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 transition-colors"
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

                {/* Desktop navigation - Centered */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-10">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group relative py-2 text-sm font-bold tracking-wide transition-all duration-300 ${isActive
                                    ? 'text-emerald-600'
                                    : 'text-slate-600 hover:text-emerald-600'
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </Link>
                        )
                    })}
                </div>
                
                {/* Contact button - Right side */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button 
                        asChild 
                        className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-7 py-5 font-bold shadow-[0_4px_14px_0_rgb(16,185,129,39%)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(16,185,129,23%)] hover:scale-[1.03] active:scale-95"
                    >
                        <a 
                            href="https://wa.me/918319931901" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5"
                        >
                            <svg 
                                viewBox="0 0 24 24" 
                                className="w-5 h-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            <span>WhatsApp</span>
                        </a>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="space-y-1 px-6 pb-6 pt-2 bg-white border-b border-slate-100 shadow-xl">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block rounded-xl px-4 py-3.5 text-base font-bold transition-all ${isActive
                                        ? 'text-emerald-600 bg-emerald-50/50'
                                        : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                        {/* Mobile Contact button */}
                        <div className="mt-6">
                            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl h-14 font-bold shadow-lg shadow-emerald-200 transition-all active:scale-[0.98]">
                                <a 
                                    href="https://wa.me/918319931901" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2.5"
                                >
                                    <svg 
                                        viewBox="0 0 24 24" 
                                        className="w-5 h-5 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    <span>Chat with us</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
