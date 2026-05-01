'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
    Heart,
    Users,
    Camera,
    Tent,
    Trophy,
    Mountain,
    Sparkles,
    Instagram,
    ExternalLink,
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
    const router = useRouter()

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
            icon: <Heart className="w-8 h-8 text-emerald-600" />,
            title: 'Sustainable Tourism',
            description: 'Responsible travel that supports local communities',
        },
    ]

    const promises = [
        {
            label: 'Safety First',
            value: 'Verified',
            icon: <Shield className="w-6 h-6" />,
            description: 'Certified guides and rigorous safety protocols for every trail.'
        },
        {
            label: 'Local Wisdom',
            value: 'Authentic',
            icon: <Compass className="w-6 h-6" />,
            description: 'Native guides who share deep cultural and geographic insights.'
        },
        {
            label: 'Eco-Conscious',
            value: 'Sustainable',
            icon: <Heart className="w-6 h-6" />,
            description: 'Committed to preserving the mountains we love to explore.'
        },
        {
            label: 'Expert Curation',
            value: 'Curated',
            icon: <Trophy className="w-6 h-6" />,
            description: 'Every trek is handpicked and tested for the best experience.'
        }
    ]

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`${APP_ROUTES.TREKS}?search=${encodeURIComponent(searchQuery.trim())}`)
        } else {
            router.push(APP_ROUTES.TREKS)
        }
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
        <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center z-40">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
                        alt="Majestic mountain range"
                        className="w-full h-full object-cover scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white" />
                </div>

                <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-20">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in">
                        <Sparkles className="w-4 h-4" />
                        <span>Adventure starts here</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                        Chase the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 pr-4 pb-1">
                            Heights
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
                        Curated adventures for the restless souls. Explore the world's most breathtaking peaks with expert local wisdom.
                    </p>

                    {/* Floating Search Bar */}
                    <div ref={searchRef} className="relative max-w-3xl mx-auto z-50">
                        <form onSubmit={handleSearch} className="p-2 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">
                            <div className="flex flex-col md:flex-row items-center gap-2">
                                <div className="relative flex-1 w-full group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                                    <Input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onFocus={() => searchQuery.length >= 2 && setShowSuggestions(true)}
                                        placeholder="Where do you want to go?"
                                        className="w-full bg-white/80 border-none text-gray-900 placeholder-gray-500 h-16 rounded-2xl pl-12 text-lg focus-visible:ring-2 focus-visible:ring-emerald-500/50 shadow-inner"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-10 h-16 rounded-2xl text-lg font-bold shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-95"
                                >
                                    Explore
                                </Button>
                            </div>
                        </form>

                        {/* Search Suggestions */}
                        {showSuggestions && suggestions.length > 0 && (
                            <div className="absolute top-[120%] left-0 right-0 mt-2 bg-white border border-gray-100 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] z-[99999] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 p-2">
                                <div className="space-y-1">
                                    {suggestions.map((suggestion) => (
                                        <Link
                                            key={suggestion.id}
                                            href={APP_ROUTES.TREK_DETAIL(suggestion.id)}
                                            onClick={() => setShowSuggestions(false)}
                                            className="group flex items-center gap-4 p-3 hover:bg-emerald-50/50 rounded-2xl transition-all duration-300"
                                        >
                                            <div className="relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                                                <ImageWithFallback
                                                    src={suggestion.image}
                                                    alt={suggestion.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/10" />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h4 className="font-black text-gray-900 group-hover:text-emerald-700 transition-colors truncate">
                                                        {suggestion.title}
                                                    </h4>
                                                    <span className="text-emerald-600 font-black text-sm whitespace-nowrap ml-4">
                                                        ₹{suggestion.cost.toLocaleString('en-IN')}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <div className="flex items-center text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                                                        <Clock className="w-3 h-3 mr-1 text-emerald-500" />
                                                        {suggestion.duration}
                                                    </div>
                                                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                                                    <div className="flex items-center text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                                                        <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${suggestion.difficulty.toLowerCase() === 'easy' ? 'bg-green-500' :
                                                            suggestion.difficulty.toLowerCase() === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'
                                                            }`} />
                                                        {suggestion.difficulty}
                                                    </div>
                                                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                                                    <div className="flex items-center text-[10px] text-gray-500 font-bold uppercase tracking-wider truncate">
                                                        <MapPin className="w-3 h-3 mr-1 text-emerald-500" />
                                                        {suggestion.location}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 hidden md:block">
                                                <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </section>

            {/* Featured Adventures */}
            <section className="py-10 md:py-22 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50/50 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                                Most Popular <span className="text-emerald-600">Adventures</span>
                            </h2>
                            <p className="text-lg text-gray-500 font-medium">
                                Handpicked adventures that showcase the world's most spectacular destinations.
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-2xl border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold px-8"
                            asChild
                        >
                            <Link href={APP_ROUTES.TREKS}>
                                View All Adventures
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                        {featuredTreks.map((trek) => (
                            <Card
                                key={trek.id}
                                className="group relative flex flex-col h-full bg-white border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] transition-all duration-500 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden"
                            >
                                <Link href={APP_ROUTES.TREK_DETAIL(trek.id)} className="flex flex-col h-full">
                                    <div className="aspect-[16/10] md:aspect-[11/10] relative overflow-hidden">
                                        <ImageWithFallback
                                            src={trek.image}
                                            alt={trek.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <div className="absolute top-5 left-5">
                                            <Badge className="bg-white/90 backdrop-blur-md text-emerald-700 border-none px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] shadow-sm rounded-xl">
                                                {trek.category}
                                            </Badge>
                                        </div>

                                        <div className="absolute bottom-5 right-5 transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                                                <ArrowRight className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>

                                    <CardContent className="p-6 md:p-8 flex flex-col flex-1">
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-1">
                                                    {trek.title}
                                                </h3>
                                                <div className="flex items-center text-gray-400 text-xs md:text-sm font-bold">
                                                    <MapPin className="w-4 h-4 mr-1.5 text-emerald-500/60" />
                                                    <span className="line-clamp-1">{trek.location}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-3 py-3 border-y border-gray-50">
                                                <div className="flex items-center text-xs text-gray-600 font-bold bg-gray-50 px-3 py-1.5 rounded-xl">
                                                    <Clock className="w-3.5 h-3.5 text-emerald-600 mr-2" />
                                                    {trek.duration}
                                                </div>
                                                <div className="flex items-center text-xs text-gray-600 font-bold bg-gray-50 px-3 py-1.5 rounded-xl">
                                                    <div className={`w-2 h-2 rounded-full mr-2 ${trek.difficulty.toLowerCase() === 'easy' ? 'bg-green-500' :
                                                        trek.difficulty.toLowerCase() === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'
                                                        }`} />
                                                    {trek.difficulty}
                                                </div>
                                                {trek.highestAltitude && (
                                                    <div className="flex items-center text-xs text-gray-600 font-bold bg-gray-50 px-3 py-1.5 rounded-xl">
                                                        <Mountain className="w-3.5 h-3.5 text-emerald-600 mr-2" />
                                                        {trek.highestAltitude}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Starting from</p>
                                                <p className="text-2xl md:text-3xl font-black text-emerald-700">
                                                    ₹{trek.cost.toLocaleString('en-IN')}
                                                </p>
                                            </div>
                                            <div className="h-10 w-px bg-gray-100 mx-4" />
                                            <div className="text-right group/cta">
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Explore</p>
                                                <p className="text-sm font-bold text-emerald-600 flex items-center justify-end">
                                                    View Details
                                                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover/cta:translate-x-1 transition-transform" />
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-32 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-20">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-black tracking-widest uppercase mb-4">
                            Premium Standards
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Chasingheights?</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                            We don't just sell treks; we curate life-changing adventures with a focus on safety and local immersion.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="relative group p-10 bg-white rounded-[3rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2">
                                <div className="bg-emerald-50 rounded-3xl w-20 h-20 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{feature.description}</p>

                                <div className="absolute top-6 right-6 text-gray-100 group-hover:text-emerald-50 transition-colors duration-500 font-black text-6xl select-none">
                                    0{index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section - Visual Only */}
            <section className="relative py-24 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <ImageWithFallback
                        src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80"
                        alt="High mountain peak"
                        className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Our Philosophy
                            </div>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1]">
                                The Chasing Heights <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                                    Adventure Promise
                                </span>
                            </h2>
                            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                                We may be starting our journey, but our commitment to excellence is set in stone. We bring professional standards to every trail, ensuring your adventure is safe, authentic, and unforgettable.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {promises.map((promise, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        {promise.icon}
                                    </div>
                                    <div className="text-3xl font-black text-white mb-2 tracking-tight">
                                        {promise.value}
                                    </div>
                                    <div className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2">
                                        {promise.label}
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        {promise.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Treks */}
            <section className="py-16 md:py-32 bg-emerald-50/30 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 md:mb-20">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-black tracking-widest uppercase mb-4">
                            Next On The Horizon
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Upcoming Adventures</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                            Limited spots available for our next season. Book your spot today.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                        {upcomingTreks.map((trek) => (
                            <Card
                                key={trek.id}
                                className="group relative flex flex-col h-full bg-white border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] transition-all duration-500 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden"
                            >
                                <Link href={APP_ROUTES.TREK_DETAIL(trek.id)} className="flex flex-col h-full">
                                    <div className="aspect-[16/10] md:aspect-[11/10] relative overflow-hidden">
                                        <ImageWithFallback
                                            src={trek.image}
                                            alt={trek.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <div className="absolute top-5 left-5">
                                            <Badge className="bg-emerald-600 text-white border-none px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] shadow-sm rounded-xl">
                                                Upcoming
                                            </Badge>
                                        </div>

                                        <div className="absolute bottom-5 right-5 transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                                                <ArrowRight className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>

                                    <CardContent className="p-6 md:p-8 flex flex-col flex-1">
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-1">
                                                    {trek.title}
                                                </h3>
                                                <div className="flex items-center text-gray-400 text-xs md:text-sm font-bold">
                                                    <MapPin className="w-4 h-4 mr-1.5 text-emerald-500/60" />
                                                    <span className="line-clamp-1">{trek.location}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-3 py-3 border-y border-gray-50">
                                                <div className="flex items-center text-xs text-gray-600 font-bold bg-gray-50 px-3 py-1.5 rounded-xl">
                                                    <Clock className="w-3.5 h-3.5 text-emerald-600 mr-2" />
                                                    {trek.duration}
                                                </div>
                                                <div className="flex items-center text-xs text-gray-600 font-bold bg-gray-50 px-3 py-1.5 rounded-xl">
                                                    <div className={`w-2 h-2 rounded-full mr-2 ${trek.difficulty.toLowerCase() === 'easy' ? 'bg-green-500' :
                                                        trek.difficulty.toLowerCase() === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'
                                                        }`} />
                                                    {trek.difficulty}
                                                </div>
                                                {trek.highestAltitude && (
                                                    <div className="flex items-center text-xs text-gray-600 font-bold bg-gray-50 px-3 py-1.5 rounded-xl">
                                                        <Mountain className="w-3.5 h-3.5 text-emerald-600 mr-2" />
                                                        {trek.highestAltitude}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Starting from</p>
                                                <p className="text-2xl md:text-3xl font-black text-emerald-700">
                                                    ₹{trek.cost.toLocaleString('en-IN')}
                                                </p>
                                            </div>
                                            <div className="h-10 w-px bg-gray-100 mx-4" />
                                            <div className="text-right group/cta">
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">Explore</p>
                                                <p className="text-sm font-bold text-emerald-600 flex items-center justify-end">
                                                    View Details
                                                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover/cta:translate-x-1 transition-transform" />
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-bold uppercase tracking-wider mb-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
                                </span>
                                Live on Instagram
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">
                                Journey through <br className="hidden md:block" />
                                my <span className="text-pink-600 italic">Lens</span>
                            </h2>
                            <p className="text-gray-500 font-medium max-w-md mx-auto md:mx-0">
                                Real moments from the world's most remote corners. Follow the adventure in real-time on Instagram.
                            </p>
                        </div>
                        
                        <a 
                            href="https://www.instagram.com/yogesh.travelstories" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 bg-white border border-gray-100 p-3 px-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 w-fit mx-auto md:mx-0"
                        >
                            <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shrink-0">
                                <Instagram className="w-7 h-7" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Follow on Insta</p>
                                <p className="font-bold text-gray-900 group-hover:text-pink-600 transition-colors flex items-center whitespace-nowrap">
                                    @yogesh.travelstories
                                    <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-50" />
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            "https://instagram.fbho3-4.fna.fbcdn.net/v/t51.82787-15/562171433_18403253431190113_2815090038273962787_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzczOTY0OTg1NTgxMjU3MDkxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=8p2ni7X6RcEQ7kNvwEpG79a&_nc_oc=Adrc-T4UeWZ7EZpSIReUeF1izJ57KrBpOR3RXkzByZaaDplZWtFzL6mdMQG1LubVhIDJqpOobCc1xpAE7k3cP8HF&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fbho3-4.fna&_nc_gid=ZTl9Qn8cnK8_XcxEWRLtUg&_nc_ss=7a22e&oh=00_Af5Al4OQAL5vhJG3g66jdSyEgw2Sdla4gWuMW5rMQts_2g&oe=69FA68CF",
                            "https://instagram.fbho3-1.fna.fbcdn.net/v/t51.82787-15/648172611_18425558389190113_2130145573520622940_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=109&ig_cache_key=Mzg0Njg1MDU1OTM4MzUzNTIwOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=qPUZzOd5jBMQ7kNvwHcWacz&_nc_oc=AdrqzbR8szpnp-imZ32ieN6l9S9Fv9b43PVOxnsFKiPbQG9Y-6BMJEDJrhE54xy82NPWrjAfdCfOHHOK-k_u8zAV&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fbho3-1.fna&_nc_gid=P4UgCSNoaksx6X3po_NkGA&_nc_ss=7a22e&oh=00_Af7_ZRS65WsBNk3PNb-v58B_chfAqPrRZPbzWwQdUGQl3g&oe=69FA6F05",
                            "https://instagram.fbho3-2.fna.fbcdn.net/v/t51.82787-15/539019015_18396442114190113_5635099476192784300_n.heic?stp=dst-jpg_e35_p720x720_tt6&_nc_cat=105&ig_cache_key=MzcwNjcxNjgzMDk2MDg2MzIzOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=9Tm7GSMOdwoQ7kNvwErF0Yt&_nc_oc=Ado4kgrtjKbyTS0hIFZmtWLPDbYxSDiW9Umei3NpAOsW0h7Ed0HJUYlBCQsSe6Bfb7foENU55kOJA41sU8X9kORM&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fbho3-2.fna&_nc_gid=OykCZnjaItmi-0peIwQVDw&_nc_ss=7a22e&oh=00_Af4Uzt--SrIsI_ejIHN2xH1bI3UaTgsVunUj8KyYHjiHkA&oe=69FA8A34",
                            "https://instagram.fbho3-5.fna.fbcdn.net/v/t51.82787-15/621570979_17935512429150317_2366019039838171658_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzYxMzk0NTU2NDQyNzY4ODMwMg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5OS5zZHIuQzMifQ%3D%3D&_nc_ohc=fVmu5rsC2hIQ7kNvwFjsN_Y&_nc_oc=Adq-l7vTZQ-p3X2AO5sgXkStkHn6AJlbK19A-UA-lz-GCv2_cZTFvg4wX6pIVL9V8z7rcCM8M6zPPk_UDJ5eS4RD&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fbho3-5.fna&_nc_gid=OykCZnjaItmi-0peIwQVDw&_nc_ss=7a22e&oh=00_Af7WLWfD4vGfi2nkdTIWg29iWqFtr2mdyDsmImEINoI4WA&oe=69FA9794",
                            "https://instagram.fbho3-2.fna.fbcdn.net/v/t51.82787-15/645952125_17926074756239124_7174967051844525574_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzU0NDY4ODY5MzQxMjg3MjU4NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=j3supFl9TnEQ7kNvwEqT-S0&_nc_oc=Adp73vWMfaIuyYzPAwMxFD_1qKEf52wWo6PwpDadSMmopzYVxR4nKE3_PItTiBe0_GD6LExCAuiuuYfGp5JdOpes&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fbho3-2.fna&_nc_gid=YwvkptSq-JqyrgIYGRt5IQ&_nc_ss=7a22e&oh=00_Af7XuAywf2OYDu44pgNY4af5x-GEryziny-EpMsw6C2aQg&oe=69FA977F",
                            "https://instagram.fbho3-2.fna.fbcdn.net/v/t51.82787-15/538125826_18396182026190113_5018870313372645069_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzcwNTI5MDI5ODc4Njc0NDEzNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=wHxYxyKgeOAQ7kNvwGxUKTM&_nc_oc=Adpfe6f7X4V8djV-7I5_4nap9KffvbD0MrRw4ej6aslYaOVFy6WYB8G3B9AuFGStVptM1NvYrLtFgvhJB5o_xZGx&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fbho3-2.fna&_nc_gid=OykCZnjaItmi-0peIwQVDw&_nc_ss=7a22e&oh=00_Af6nbQY7c8lVGKvMbrtmAzk-TL4ZqAJ8HZNGJiiTI_3HEQ&oe=69FA8960",
                        ].map((img, i) => (
                            <a 
                                key={i}
                                href="https://www.instagram.com/yogesh.travelstories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                <ImageWithFallback
                                    src={img}
                                    alt={`Instagram post ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                                    <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}
