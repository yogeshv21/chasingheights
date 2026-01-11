import Link from 'next/link'
import { Mountain, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'
import { APP_ROUTES } from '@/lib/constants/routes'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <Mountain className="h-8 w-8 text-emerald-500" />
                            <span className="text-xl font-bold text-white">Chasingheights</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Your adventure partner for unforgettable trekking experiences around the world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={APP_ROUTES.TREKS} className="hover:text-emerald-500 transition-colors">
                                    Browse Treks
                                </Link>
                            </li>
                            <li>
                                <Link href={APP_ROUTES.ABOUT} className="hover:text-emerald-500 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href={APP_ROUTES.BLOG} className="hover:text-emerald-500 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href={APP_ROUTES.CONTACT} className="hover:text-emerald-500 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-emerald-500 transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-500 transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-500 transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-emerald-500 transition-colors">
                                    Cancellation Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2">
                                <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">123 Adventure Street, Mountain View, MV 12345</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-sm">info@chasingheights.com</span>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-emerald-500 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-emerald-500 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-emerald-500 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {currentYear} Chasingheights. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
