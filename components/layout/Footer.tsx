'use client'

import Link from 'next/link'
import { Mountain, Mail, Phone, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react'
import { APP_ROUTES } from '@/lib/constants/routes'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand & Mission */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="bg-emerald-500 rounded-lg p-1.5 transition-transform group-hover:scale-110">
                                <Mountain className="h-6 w-6 text-slate-950" />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">Chasing Heights</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
                            We don't just organize treks; we curate life-changing expeditions. Join us to explore the most breathtaking peaks with expert safety and local wisdom.
                        </p>
                        <div className="flex items-center space-x-3">
                            <a href="https://www.instagram.com/yogesh.travelstories" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs">Explore</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href={APP_ROUTES.TREKS} className="text-sm hover:text-emerald-500 transition-colors flex items-center group">
                                    <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden text-emerald-500">→</span>
                                    Browse Expeditions
                                </Link>
                            </li>
                            <li>
                                <Link href={APP_ROUTES.BLOG} className="text-sm hover:text-emerald-500 transition-colors flex items-center group">
                                    <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden text-emerald-500">→</span>
                                    Mountain Tales
                                </Link>
                            </li>
                            <li>
                                <Link href={APP_ROUTES.CONTACT} className="text-sm hover:text-emerald-500 transition-colors flex items-center group">
                                    <span className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden text-emerald-500">→</span>
                                    Get in Touch
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs">Contact</h3>
                        <div className="space-y-4">
                            <a href="tel:+918319931901" className="flex items-center space-x-3 group text-sm hover:text-emerald-500 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-emerald-500/10">
                                    <Phone className="h-4 w-4 text-emerald-500" />
                                </div>
                                <span>+91 83199 31901</span>
                            </a>
                            <a href="mailto:chasingheight@gmail.com" className="flex items-center space-x-3 group text-sm hover:text-emerald-500 transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-emerald-500/10">
                                    <Mail className="h-4 w-4 text-emerald-500" />
                                </div>
                                <span className="truncate">chasingheight@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs">Stay Updated</h3>
                        <p className="text-sm text-slate-500">Subscribe to get trek alerts and adventure tips.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <Input 
                                    type="email" 
                                    placeholder="your@email.com" 
                                    className="bg-slate-900 border-slate-800 focus:border-emerald-500 h-11 rounded-xl text-slate-200 pl-4 pr-12"
                                />
                                <button className="absolute right-2 top-2 w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center text-white hover:bg-emerald-500 transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-600">
                        &copy; {currentYear} Chasing Heights. Built for explorers.
                    </p>
                    <div className="flex items-center space-x-6 text-xs text-slate-600">
                        <a href="#" className="hover:text-emerald-500 transition-colors">Terms</a>
                        <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-emerald-500 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
