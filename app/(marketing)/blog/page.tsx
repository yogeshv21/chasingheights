'use client'

import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { APP_ROUTES } from '@/lib/constants/routes'
import { Bell, Calendar, Compass, Mountain, Sparkles } from 'lucide-react'

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="text-center space-y-8">
                        {/* Animated Icon */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                                <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300">
                                    <Mountain className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-emerald-100">
                            <Sparkles className="w-4 h-4 text-emerald-600" />
                            <span className="text-sm font-medium text-emerald-700">Launching Soon</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-sky-600 leading-tight">
                                Coming Soon
                            </h1>
                            <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                                Our Adventure Blog
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We're crafting inspiring stories from the trail, expert trekking tips, and breathtaking
                            journey narratives. Get ready to fuel your wanderlust with our upcoming blog!
                        </p>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Compass className="w-6 h-6 text-emerald-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Travel Guides</h3>
                                <p className="text-sm text-gray-600">
                                    Detailed guides for your next adventure
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="bg-sky-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Mountain className="w-6 h-6 text-sky-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Trek Stories</h3>
                                <p className="text-sm text-gray-600">
                                    Real experiences from fellow adventurers
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
                                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Expert Tips</h3>
                                <p className="text-sm text-gray-600">
                                    Pro advice from seasoned trekkers
                                </p>
                            </div>
                        </div>

                        {/* Notification Signup */}
                        <div className="pt-8">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 max-w-md mx-auto">
                                <div className="flex items-center justify-center gap-2 mb-4">
                                    <Bell className="w-5 h-5 text-emerald-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">Get Notified</h3>
                                </div>
                                <p className="text-sm text-gray-600 mb-6">
                                    Be the first to read our adventure stories when we launch!
                                </p>
                                <div className="flex gap-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                                    />
                                    <Button className="bg-emerald-600 hover:bg-emerald-700 px-6 rounded-xl">
                                        Notify Me
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
                            <Button
                                size="lg"
                                className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                                asChild
                            >
                                <Link href={APP_ROUTES.TREKS}>
                                    Explore Adventures
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                                asChild
                            >
                                <Link href={APP_ROUTES.CONTACT}>
                                    Contact Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

            <style jsx>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </>
    )
}
