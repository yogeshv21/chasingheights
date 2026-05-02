'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useSearchParams } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { MapPin, Clock, Search, Filter, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { ImageWithFallback } from '@/components/shared/ImageWithFallback'
import { DUMMY_TREKS, searchTreks, mockDelay } from '@/data/dummyData'
import type { Trek } from '@/types/trek'
import { APP_ROUTES } from '@/lib/constants/routes'

interface Filters {
    search: string
    season: string
    difficulty: string
    month: string
    category: string
    priceRange: string
}

export function TrekListingsClient() {
    const router = useRouter()
    const [treks, setTreks] = useState<Trek[]>([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const [filters, setFilters] = useState<Filters>({
        search: searchParams.get('search') || '',
        season: '',
        difficulty: '',
        month: '',
        category: '',
        priceRange: '',
    })

    const clearSearch = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('search'); // 🔥 remove it completely

        router.replace(`${pathname}?${params.toString()}`);
    };

    const itemsPerPage = 9

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchTreks()
        }, 500)
        return () => clearTimeout(timer)
    }, [filters])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [currentPage])

    const fetchTreks = async () => {
        try {
            setLoading(true)
            await mockDelay(800)

            let filteredTreks = [...DUMMY_TREKS]

            // Apply search filter
            if (filters.search) {
                filteredTreks = searchTreks(filters.search)
            }

            // Apply category filter
            if (filters.category) {
                filteredTreks = filteredTreks.filter(
                    (trek) => trek.category === filters.category
                )
            }

            // Apply difficulty filter
            if (filters.difficulty) {
                filteredTreks = filteredTreks.filter(
                    (trek) => trek.difficulty === filters.difficulty
                )
            }

            // Apply season filter
            if (filters.season) {
                filteredTreks = filteredTreks.filter((trek) =>
                    trek.season.toLowerCase().includes(filters.season.toLowerCase())
                )
            }

            // Apply month filter
            if (filters.month) {
                filteredTreks = filteredTreks.filter(
                    (trek) => trek.months && trek.months.includes(filters.month)
                )
            }

            // Apply price range filter
            if (filters.priceRange) {
                const [min, max] = filters.priceRange.split('-').map(Number)
                if (max) {
                    filteredTreks = filteredTreks.filter(
                        (trek) => trek.cost >= min && trek.cost <= max
                    )
                } else {
                    filteredTreks = filteredTreks.filter((trek) => trek.cost >= min)
                }
            }

            setTreks(filteredTreks)
            setCurrentPage(1)
        } catch (error) {
            console.error('Error fetching treks:', error)
            setTreks([])
        } finally {
            setLoading(false)
        }
    }

    const handleFilterChange = (key: keyof Filters, value: string) => {
        if (key === 'search') {
            clearSearch();
        }
        setFilters((prev) => ({ ...prev, [key]: value }))
    }

    const clearFilters = () => {
        clearSearch();
        setFilters({
            search: '',
            season: '',
            difficulty: '',
            month: '',
            category: '',
            priceRange: '',
        })
    }

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'easy':
                return 'bg-green-100 text-green-800'
            case 'moderate':
                return 'bg-yellow-100 text-yellow-800'
            case 'hard':
                return 'bg-red-100 text-red-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    // Pagination logic
    const totalPages = Math.ceil(treks.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentTreks = treks.slice(startIndex, endIndex)



    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#fcfdfc]">
                {/* Hero Section */}
                <div className="relative bg-white pt-9 pb-13 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                                {filters.search
                                    ? `Results for "${filters.search}"`
                                    : 'Discover Amazing Treks'}
                            </h1>
                            <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                                {filters.search
                                    ? `We found ${treks.length} breathtaking journeys matching your criteria.`
                                    : 'Explore our handpicked collection of world-class adventures, from high mountain passes to hidden valley escapes.'}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    {/* Main Layout with Sidebar */}
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Mobile Filter Toggle */}
                        <div className="lg:hidden space-y-4">
                            <div className="relative group">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-emerald-500 transition-colors" />
                                <Input
                                    placeholder="Search treks..."
                                    value={filters.search}
                                    onChange={(e) => handleFilterChange('search', e.target.value)}
                                    className="pl-12 h-14 text-lg border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-2xl shadow-sm bg-white transition-all"
                                />
                            </div>
                            <Button
                                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center h-14 text-lg rounded-2xl shadow-lg shadow-emerald-100 transition-all active:scale-[0.98]"
                            >
                                <Filter className="w-5 h-5 mr-2" />
                                {isMobileFilterOpen ? 'Hide Filters' : 'Filter Adventures'}
                            </Button>
                        </div>

                        {/* Left Sidebar - Filters */}
                        <div className={`lg:w-80 flex-shrink-0 ${isMobileFilterOpen ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 lg:static lg:bg-transparent lg:p-0 lg:block' : 'hidden lg:block'}`}>
                            <div className={`bg-white/80 backdrop-blur-xl border border-gray-100 w-full flex flex-col shadow-2xl lg:shadow-none overflow-hidden ${isMobileFilterOpen ? 'rounded-[2.5rem] max-h-[85vh] animate-in zoom-in-95' : 'rounded-[2rem] sticky top-24'}`}>
                                {/* Sticky Header */}
                                <div className="flex items-center justify-between p-8 pb-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-emerald-600 rounded-full" />
                                        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {Object.values(filters).some((filter) => filter) && (
                                            <button
                                                onClick={() => {
                                                    clearFilters()
                                                    setIsMobileFilterOpen(false)
                                                }}
                                                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 underline underline-offset-4 decoration-2"
                                            >
                                                Reset All
                                            </button>
                                        )}
                                        {isMobileFilterOpen && (
                                            <button
                                                onClick={() => setIsMobileFilterOpen(false)}
                                                className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors"
                                            >
                                                <X className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Scrolling Body */}
                                <div className={`px-8 pb-10 space-y-7 flex-1 overflow-y-auto no-scrollbar`}>
                                    {/* Search */}
                                    <div className="hidden lg:block">
                                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3 ml-1">
                                            Search Treks
                                        </label>
                                        <div className="relative group">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-emerald-500 transition-colors" />
                                            <Input
                                                placeholder="Search by name..."
                                                value={filters.search}
                                                onChange={(e) => handleFilterChange('search', e.target.value)}
                                                className="pl-10 h-11 bg-gray-50/50 border-gray-100 focus:bg-white transition-all rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    {/* Difficulty */}
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                                            Difficulty Level
                                        </label>
                                        <Select
                                            value={filters.difficulty}
                                            onValueChange={(value) => handleFilterChange('difficulty', value)}
                                        >
                                            <SelectTrigger className="h-11 bg-gray-50/50 border-gray-100 rounded-xl focus:ring-emerald-500/20">
                                                <SelectValue placeholder="Select difficulty" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-gray-100">
                                                <SelectItem value="Easy">Easy</SelectItem>
                                                <SelectItem value="Moderate">Moderate</SelectItem>
                                                <SelectItem value="Hard">Hard</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Season */}
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                                            Best Season
                                        </label>
                                        <Select
                                            value={filters.season}
                                            onValueChange={(value) => handleFilterChange('season', value)}
                                        >
                                            <SelectTrigger className="h-11 bg-gray-50/50 border-gray-100 rounded-xl focus:ring-emerald-500/20">
                                                <SelectValue placeholder="Select season" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-gray-100">
                                                <SelectItem value="Spring">Spring</SelectItem>
                                                <SelectItem value="Summer">Summer</SelectItem>
                                                <SelectItem value="Autumn">Autumn</SelectItem>
                                                <SelectItem value="Winter">Winter</SelectItem>
                                                <SelectItem value="All Year">All Year</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Month */}
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                                            Month
                                        </label>
                                        <Select
                                            value={filters.month}
                                            onValueChange={(value) => handleFilterChange('month', value)}
                                        >
                                            <SelectTrigger className="h-11 bg-gray-50/50 border-gray-100 rounded-xl focus:ring-emerald-500/20">
                                                <SelectValue placeholder="Select Month" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-gray-100 h-60">
                                                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                                                    <SelectItem key={m} value={m}>{m}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Price Range */}
                                    <div className="space-y-1">
                                        <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                                            Price Range
                                        </label>
                                        <Select
                                            value={filters.priceRange}
                                            onValueChange={(value) => handleFilterChange('priceRange', value)}
                                        >
                                            <SelectTrigger className="h-11 bg-gray-50/50 border-gray-100 rounded-xl focus:ring-emerald-500/20">
                                                <SelectValue placeholder="Select Price" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl border-gray-100">
                                                <SelectItem value="0-20000">Below ₹20,000</SelectItem>
                                                <SelectItem value="20000-50000">₹20,000 - ₹50,000</SelectItem>
                                                <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                                                <SelectItem value="100000-200000">₹1,00,000 - ₹2,00,000</SelectItem>
                                                <SelectItem value="200000">Above ₹2,00,000</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Results Summary */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-gray-400">Total Found</span>
                                        <span className="text-sm font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">{treks.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Trek Grid */}
                        <div className="flex-1">
                            {/* Active Filters Chips */}
                            {Object.entries(filters).filter(([_, value]) => value !== '').length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {Object.entries(filters).map(([key, value]) => {
                                        if (!value) return null;
                                        return (
                                            <Badge
                                                key={key}
                                                className="px-4 py-2 bg-white text-gray-900 border-none shadow-sm flex items-center gap-2 rounded-full hover:bg-gray-50 transition-all"
                                            >
                                                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">
                                                    {key === 'priceRange' ? 'Price' : key}:
                                                </span>
                                                <span className="text-sm font-bold">{value}</span>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleFilterChange(key as keyof Filters, '');
                                                    }}
                                                    className="ml-1 p-0.5 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                                                    type="button"
                                                >
                                                    <X className="w-3.5 h-3.5" />
                                                </button>
                                            </Badge>
                                        )
                                    })}
                                </div>
                            )}

                            {loading ? (
                                <div className="flex flex-col items-center justify-center py-40">
                                    <div className="relative w-16 h-16">
                                        <div className="absolute inset-0 rounded-full border-4 border-emerald-50 border-t-emerald-600 animate-spin" />
                                    </div>
                                    <p className="mt-6 text-gray-400 font-bold tracking-widest uppercase text-xs">Curating Experiences...</p>
                                </div>
                            ) : currentTreks.length > 0 ? (
                                <>
                                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                                        {currentTreks.map((trek) => (
                                            <Card
                                                key={trek.id}
                                                className="group flex flex-col h-full cursor-pointer hover:shadow-2xl transition-all duration-500 border-none rounded-[2rem] overflow-hidden bg-white shadow-lg shadow-gray-200/50"
                                                onClick={() => router.push(APP_ROUTES.TREK_DETAIL(trek.id))}
                                            >
                                                <div className="aspect-[16/11] relative overflow-hidden">
                                                    <ImageWithFallback
                                                        src={trek.image}
                                                        alt={trek.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                                    <div className="absolute top-4 left-4">
                                                        <Badge className="bg-white/90 backdrop-blur-md text-emerald-700 border-none px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                                                            {trek.category}
                                                        </Badge>
                                                    </div>
                                                </div>

                                                <CardContent className="p-5 md:p-5 flex flex-col flex-1">
                                                    <div className="flex-1 space-y-4">
                                                        <div className='mb-3'>
                                                            <h3 className="text-xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-1.5 min-h-[3.5rem] leading-tight">
                                                                {trek.title}
                                                            </h3>
                                                            <div className="flex items-center text-gray-400 text-[10px] font-bold tracking-wider uppercase">
                                                                <MapPin className="w-3 h-3 mr-1.5 text-emerald-500 shrink-0" />
                                                                <span className="line-clamp-1">{trek.location}</span>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-y-3 gap-x-4 pt-3 border-t border-gray-50">
                                                            <div className="flex flex-col gap-0.5">
                                                                <span className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Duration</span>
                                                                <div className="flex items-center text-xs font-bold text-gray-700">
                                                                    <Clock className="w-3 h-3 text-emerald-500 mr-1.5" />
                                                                    {trek.duration}
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-0.5">
                                                                <span className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Difficulty</span>
                                                                <div className="flex items-center text-xs font-bold text-gray-700">
                                                                    <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${trek.difficulty.toLowerCase() === 'easy' ? 'bg-green-500' :
                                                                        trek.difficulty.toLowerCase() === 'moderate' ? 'bg-yellow-500' : 'bg-red-500'
                                                                        }`} />
                                                                    {trek.difficulty}
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-0.5">
                                                                <span className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Altitude</span>
                                                                <div className="text-xs font-bold text-gray-700">
                                                                    <span className="text-emerald-600 mr-1">↑</span>
                                                                    {trek.highestAltitude}
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-0.5">
                                                                <span className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Distance</span>
                                                                <div className="text-xs font-bold text-gray-700">
                                                                    <span className="text-emerald-600 mr-1">↔</span>
                                                                    {trek.totalDistance}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between gap-3">
                                                        <div className="flex flex-col">
                                                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Price pp</span>
                                                            <span className="text-xl font-black text-emerald-800 tracking-tight">
                                                                ₹{trek.cost.toLocaleString('en-IN')}
                                                            </span>
                                                        </div>
                                                        <Button
                                                            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-10 px-4 text-xs font-bold shadow-lg shadow-emerald-100 transition-all active:scale-95 group/btn"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                router.push(APP_ROUTES.TREK_DETAIL(trek.id))
                                                            }}
                                                        >
                                                            Details
                                                            <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>

                                    {/* Pagination Controls */}
                                    {totalPages > 1 && (
                                        <div className="flex items-center justify-center space-x-3 mt-12">
                                            <Button
                                                variant="outline"
                                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                                disabled={currentPage === 1}
                                                className="rounded-xl h-11 border-gray-200 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 transition-all"
                                            >
                                                <ChevronLeft className="w-4 h-4 mr-1.5" />
                                                Prev
                                            </Button>

                                            <div className="flex items-center gap-2">
                                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                    <Button
                                                        key={page}
                                                        onClick={() => setCurrentPage(page)}
                                                        className={`w-11 h-11 rounded-xl font-bold transition-all ${currentPage === page
                                                            ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100 scale-110'
                                                            : 'bg-white text-gray-400 hover:bg-gray-50 border border-gray-100'
                                                            }`}
                                                    >
                                                        {page}
                                                    </Button>
                                                ))}
                                            </div>

                                            <Button
                                                variant="outline"
                                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                                disabled={currentPage === totalPages}
                                                className="rounded-xl h-11 border-gray-200 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 transition-all"
                                            >
                                                Next
                                                <ChevronRight className="w-4 h-4 ml-1.5" />
                                            </Button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-24 bg-white rounded-[3rem] border border-gray-100 shadow-sm">
                                    <div className="bg-emerald-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                                        <Search className="w-10 h-10 text-emerald-600" />
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">No adventures found</h3>
                                    <p className="text-gray-500 mb-8 max-w-xs mx-auto font-medium">
                                        Try broadening your search or resetting the filters to find your next trek.
                                    </p>
                                    <Button
                                        onClick={clearFilters}
                                        className="bg-emerald-600 hover:bg-emerald-700 px-10 h-14 rounded-2xl font-bold shadow-lg shadow-emerald-100"
                                    >
                                        Reset All Filters
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
