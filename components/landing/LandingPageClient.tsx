'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
    Search,
    MapPin,
    Clock,
    ChevronRight,
    ArrowRight,
    Compass,
    Shield,
    Award,
    Heart,
} from 'lucide-react'
import { ImageWithFallback } from '@/components/shared/ImageWithFallback'
import {
    getTreksByCategory,
    getQuickTrekSuggestions,
    mockDelay,
} from '@/data/dummyData'
import type { Trek } from '@/types/trek'
import { APP_ROUTES } from '@/lib/constants/routes'

export function LandingPageClient() {
    const [featuredTreks, setFeaturedTreks] = useState<Trek[]>([])
    const [upcomingTreks, setUpcomingTreks] = useState<Trek[]>([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [suggestions, setSuggestions] = useState<Trek[]>([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        fetchTreks()
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => {
        if (searchQuery.length >= 2) {
            const newSuggestions = getQuickTrekSuggestions(searchQuery)
            setSuggestions(newSuggestions)
            setShowSuggestions(true)
        } else {
            setSuggestions([])
            setShowSuggestions(false)
        }
    }, [searchQuery])

    const fetchTreks = async () => {
        try {
            setLoading(true)
            await mockDelay(600)
            const upcoming = getTreksByCategory('upcoming').slice(0, 3)
            const featured = getTreksByCategory('trending').slice(0, 3)
            setUpcomingTreks(upcoming)
            setFeaturedTreks(featured)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching treks:', error)
            setLoading(false)
        }
    }

    const features = [
        {
            icon: <Compass className="w-8 h-8 text-emerald-600" />,
            title: 'Expert Guides',
            description: 'Professional local guides with years of mountain experience',
        },
        {
            icon: <Shield className="w-8 h-8 text-emerald-600" />,
            title: 'Safety First',
            description: 'Comprehensive safety protocols and emergency support',
        },
        {
            icon: <Award className="w-8 h-8 text-emerald-600" />,
            title: 'Certified Excellence',
            description: 'Award-winning tours with international certifications',
        },
        {
            icon: <Heart className="w-8 h-8 text-emerald-600" />,
            title: 'Sustainable Tourism',
            description: 'Responsible travel that supports local communities',
        },
    ]

    const categories = [
        {
            title: 'Nepal',
            count: 45,
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400',
        },
        {
            title: 'India',
            count: 32,
            image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400',
        },
        {
            title: 'Bhutan',
            count: 18,
            image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400',
        },
        {
            title: 'Tibet',
            count: 12,
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        },
    ]

    const testimonials = [
        {
            name: 'Sarah Johnson',
            location: 'USA',
            text: 'The Everest Base Camp trek was life-changing! Our guide was knowledgeable, the views were spectacular, and every detail was thoughtfully planned.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
        },
        {
            name: 'David Chen',
            location: 'Singapore',
            text: 'Incredible experience on the Annapurna Circuit. The team at Chasingheights made sure we were safe and comfortable throughout the journey.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        },
        {
            name: 'Emma Wilson',
            location: 'UK',
            text: 'Perfect organization and amazing scenery. I felt well-prepared and supported every step of the way. Highly recommend!',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
        },
    ]

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setShowSuggestions(false)
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading amazing adventures...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
                        alt="Mountain landscape"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        Your Next <span className="text-emerald-400">Adventure</span> Awaits
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
                        Discover breathtaking treks around the world with expert guides, premium safety, and
                        unforgettable experiences.
                    </p>

                    {/* Search Bar */}
                    <div ref={searchRef} className="relative max-w-2xl mx-auto z-50">
                        <form onSubmit={handleSearch}>
                            <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <Input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => searchQuery.length >= 2 && setShowSuggestions(true)}
                                    placeholder="Search for treks, destinations, or adventures..."
                                    className="w-full sm:flex-1 bg-white border border-gray-200 text-gray-900 placeholder-gray-500 h-14 md:h-12 min-h-[3.5rem] md:min-h-[3rem] text-base px-4 shadow-sm"
                                />
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-14 md:h-12 flex items-center justify-center min-w-[120px] text-base"
                                    asChild
                                >
                                    <Link href={APP_ROUTES.TREKS}>
                                        <Search className="w-5 h-5 mr-2" />
                                        Search
                                    </Link>
                                </Button>
                            </div>
                        </form>

                        {/* Search Suggestions */}
                        {showSuggestions && suggestions.length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-2xl z-[99999] max-h-40 overflow-y-auto">
                                {suggestions.map((suggestion) => (
                                    <Link
                                        key={suggestion.id}
                                        href={APP_ROUTES.TREK_DETAIL(suggestion.id)}
                                        onClick={() => setShowSuggestions(false)}
                                        className="flex items-center justify-between p-4 hover:bg-gray-50 border-b last:border-b-0 cursor-pointer"
                                    >
                                        <div>
                                            <p className="font-medium text-gray-900">{suggestion.title}</p>
                                            <p className="text-sm text-gray-600 flex items-center mt-1">
                                                <MapPin className="w-3 h-3 mr-1" />
                                                {suggestion.location}
                                            </p>
                                        </div>
                                        <p className="text-emerald-600 font-semibold">₹{suggestion.cost.toLocaleString('en-IN')}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Featured Adventures */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Adventures</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Handpicked expeditions that showcase the world's most spectacular destinations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredTreks.map((trek) => (
                            <Card
                                key={trek.id}
                                className="group flex flex-col h-full cursor-pointer hover:shadow-xl transition-all duration-300 border-gray-100 overflow-hidden"
                            >
                                <Link href={APP_ROUTES.TREK_DETAIL(trek.id)} className="flex flex-col h-full">
                                    <div className="aspect-[16/10] relative overflow-hidden">
                                        <ImageWithFallback
                                            src={trek.image}
                                            alt={trek.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <Badge className="bg-emerald-600/90 backdrop-blur-sm text-white border-none px-3 py-1 text-xs font-medium uppercase tracking-wider">
                                                {trek.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardContent className="p-5 flex flex-col flex-1">
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-1 mb-1.5">
                                                    {trek.title}
                                                </h3>
                                                <div className="flex items-center text-gray-500 text-sm font-medium">
                                                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
                                                    <span className="line-clamp-1">{trek.location}</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-y-3 gap-x-2 py-3 border-y border-gray-50">
                                                <div className="flex items-center text-xs text-gray-600">
                                                    <Clock className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                                                    <span className="font-medium">{trek.duration}</span>
                                                </div>
                                                <div className="flex items-center text-xs text-gray-600">
                                                    <div className={`w-2 h-2 rounded-full mr-2 shrink-0 ${
                                                        trek.difficulty.toLowerCase() === 'easy' ? 'bg-green-500' :
                                                        trek.difficulty.toLowerCase() === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'
                                                    }`} />
                                                    <span className="font-medium">{trek.difficulty}</span>
                                                </div>
                                                {trek.highestAltitude && (
                                                    <div className="flex items-center text-xs text-gray-600">
                                                        <span className="text-emerald-600 font-bold mr-2 shrink-0 italic">Alt</span>
                                                        <span className="font-medium">{trek.highestAltitude}</span>
                                                    </div>
                                                )}
                                                {trek.totalDistance && (
                                                    <div className="flex items-center text-xs text-gray-600">
                                                        <span className="text-emerald-600 font-bold mr-2 shrink-0 italic">Dist</span>
                                                        <span className="font-medium">{trek.totalDistance}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-5 flex items-center justify-between gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-xs text-gray-500 font-medium uppercase tracking-tighter">Starting from</span>
                                                <span className="text-xl font-extrabold text-emerald-700">
                                                    ₹{trek.cost.toLocaleString('en-IN')}
                                                </span>
                                            </div>
                                            <Button
                                                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm px-4"
                                                size="sm"
                                                asChild
                                            >
                                                <span>
                                                    Details
                                                    <ChevronRight className="w-4 h-4 ml-1" />
                                                </span>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                            asChild
                        >
                            <Link href={APP_ROUTES.TREKS}>
                                View All Treks
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Chasingheights?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We're committed to providing safe, sustainable, and unforgettable adventures
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-emerald-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-100 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore by Destination</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From the towering Himalayas to dramatic landscapes, discover our global collection
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <Card
                                key={index}
                                className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <Link href={APP_ROUTES.TREKS}>
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <ImageWithFallback
                                            src={category.image}
                                            alt={category.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                                            <p className="text-sm text-gray-200">{category.count} Treks</p>
                                        </div>
                                    </div>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Adventurers Say</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it - hear from fellow trekkers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="p-6">
                                <CardContent className="p-0">
                                        <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                                    <div className="flex items-center">
                                        <ImageWithFallback
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                            <p className="text-sm text-gray-600">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Treks */}
            <section className="py-20 bg-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Adventures</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Limited spots available - book your next adventure today
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {upcomingTreks.map((trek) => (
                            <Card
                                key={trek.id}
                                className="group flex flex-col h-full cursor-pointer hover:shadow-xl transition-all duration-300 border-gray-100 overflow-hidden"
                            >
                                <Link href={APP_ROUTES.TREK_DETAIL(trek.id)} className="flex flex-col h-full">
                                    <div className="aspect-[16/10] relative overflow-hidden">
                                        <ImageWithFallback
                                            src={trek.image}
                                            alt={trek.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <Badge className="bg-emerald-600/90 backdrop-blur-sm text-white border-none px-3 py-1 text-xs font-medium uppercase tracking-wider">
                                                Upcoming
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardContent className="p-5 flex flex-col flex-1">
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-1 mb-1.5">
                                                    {trek.title}
                                                </h3>
                                                <div className="flex items-center text-gray-500 text-sm font-medium">
                                                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
                                                    <span className="line-clamp-1">{trek.location}</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-y-3 gap-x-2 py-3 border-y border-gray-50">
                                                <div className="flex items-center text-xs text-gray-600">
                                                    <Clock className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0" />
                                                    <span className="font-medium">{trek.duration}</span>
                                                </div>
                                                <div className="flex items-center text-xs text-gray-600">
                                                    <div className={`w-2 h-2 rounded-full mr-2 shrink-0 ${
                                                        trek.difficulty.toLowerCase() === 'easy' ? 'bg-green-500' :
                                                        trek.difficulty.toLowerCase() === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'
                                                    }`} />
                                                    <span className="font-medium">{trek.difficulty}</span>
                                                </div>
                                                {trek.highestAltitude && (
                                                    <div className="flex items-center text-xs text-gray-600">
                                                        <span className="text-emerald-600 font-bold mr-2 shrink-0 italic">Alt</span>
                                                        <span className="font-medium">{trek.highestAltitude}</span>
                                                    </div>
                                                )}
                                                {trek.totalDistance && (
                                                    <div className="flex items-center text-xs text-gray-600">
                                                        <span className="text-emerald-600 font-bold mr-2 shrink-0 italic">Dist</span>
                                                        <span className="font-medium">{trek.totalDistance}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-5 flex items-center justify-between gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-xs text-gray-500 font-medium uppercase tracking-tighter">Starting from</span>
                                                <span className="text-xl font-extrabold text-emerald-700">
                                                    ₹{trek.cost.toLocaleString('en-IN')}
                                                </span>
                                            </div>
                                            <Button
                                                className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm px-4"
                                                size="sm"
                                                asChild
                                            >
                                                <span>
                                                    Details
                                                    <ChevronRight className="w-4 h-4 ml-1" />
                                                </span>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-emerald-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Adventure?</h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of adventurers who have discovered their passion for exploration with
                        Chasingheights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3"
                            asChild
                        >
                            <Link href={APP_ROUTES.TREKS}>
                                Browse All Treks
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3"
                            asChild
                        >
                            <Link href={APP_ROUTES.CONTACT}>Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
