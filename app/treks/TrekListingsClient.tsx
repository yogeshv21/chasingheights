'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Star, MapPin, Clock, Users, Search, Filter, ChevronRight } from 'lucide-react'
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
    const [filters, setFilters] = useState<Filters>({
        search: '',
        season: '',
        difficulty: '',
        month: '',
        category: '',
        priceRange: '',
    })

    const itemsPerPage = 9

    useEffect(() => {
        fetchTreks()
    }, [filters])

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
        setFilters((prev) => ({ ...prev, [key]: value }))
    }

    const clearFilters = () => {
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

    if (loading) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading amazing treks...</p>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            {filters.search
                                ? `Search Results for "${filters.search}"`
                                : 'Discover Amazing Treks'}
                        </h1>
                        <p className="text-xl text-gray-600 text-[14px]">
                            {filters.search
                                ? `Found ${treks.length} trek${treks.length !== 1 ? 's' : ''} matching your search`
                                : 'Find your perfect adventure from our curated collection of world-class treks'}
                        </p>
                    </div>

                    {/* Main Layout with Sidebar */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Sidebar - Filters */}
                        <div className="lg:w-80 flex-shrink-0">
                            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                                    {Object.values(filters).some((filter) => filter) && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={clearFilters}
                                            className="text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                                        >
                                            <Filter className="w-4 h-4 mr-2" />
                                            Clear
                                        </Button>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    {/* Search */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Search Treks
                                        </label>
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <Input
                                                placeholder="Search treks..."
                                                value={filters.search}
                                                onChange={(e) => handleFilterChange('search', e.target.value)}
                                                className="pl-10"
                                            />
                                        </div>
                                    </div>

                                    {/* Category */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                        </label>
                                        <Select
                                            value={filters.category}
                                            onValueChange={(value) => handleFilterChange('category', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="upcoming">Upcoming</SelectItem>
                                                <SelectItem value="trending">Trending</SelectItem>
                                                <SelectItem value="seasonal">Seasonal</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Difficulty */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Difficulty Level
                                        </label>
                                        <Select
                                            value={filters.difficulty}
                                            onValueChange={(value) => handleFilterChange('difficulty', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select difficulty" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Easy">Easy</SelectItem>
                                                <SelectItem value="Moderate">Moderate</SelectItem>
                                                <SelectItem value="Hard">Hard</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Season */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Best Season
                                        </label>
                                        <Select
                                            value={filters.season}
                                            onValueChange={(value) => handleFilterChange('season', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select season" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Spring">Spring</SelectItem>
                                                <SelectItem value="Summer">Summer</SelectItem>
                                                <SelectItem value="Autumn">Autumn</SelectItem>
                                                <SelectItem value="Winter">Winter</SelectItem>
                                                <SelectItem value="All Year">All Year</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Month */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Month
                                        </label>
                                        <Select
                                            value={filters.month}
                                            onValueChange={(value) => handleFilterChange('month', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select month" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="January">January</SelectItem>
                                                <SelectItem value="February">February</SelectItem>
                                                <SelectItem value="March">March</SelectItem>
                                                <SelectItem value="April">April</SelectItem>
                                                <SelectItem value="May">May</SelectItem>
                                                <SelectItem value="June">June</SelectItem>
                                                <SelectItem value="July">July</SelectItem>
                                                <SelectItem value="August">August</SelectItem>
                                                <SelectItem value="September">September</SelectItem>
                                                <SelectItem value="October">October</SelectItem>
                                                <SelectItem value="November">November</SelectItem>
                                                <SelectItem value="December">December</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Price Range */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Price Range
                                        </label>
                                        <Select
                                            value={filters.priceRange}
                                            onValueChange={(value) => handleFilterChange('priceRange', value)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select price range" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="0-500">₹0 - ₹500</SelectItem>
                                                <SelectItem value="500-1000">₹500 - ₹1000</SelectItem>
                                                <SelectItem value="1000-1500">₹1000 - ₹1500</SelectItem>
                                                <SelectItem value="1500-2000">₹1500 - ₹2000</SelectItem>
                                                <SelectItem value="2000">₹2000+</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* Results Count */}
                                    <div className="pt-4 border-t">
                                        <p className="text-sm text-gray-600">
                                            Found {treks.length} trek{treks.length !== 1 ? 's' : ''}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Trek Grid */}
                        <div className="flex-1">
                            {currentTreks.length > 0 ? (
                                <>
                                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                                        {currentTreks.map((trek) => (
                                            <Card
                                                key={trek.id}
                                                className="group cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
                                                onClick={() => router.push(APP_ROUTES.TREK_DETAIL(trek.id))}
                                            >
                                                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                                                    <ImageWithFallback
                                                        src={trek.image}
                                                        alt={trek.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                    <div className="absolute top-4 left-4 flex gap-2">
                                                        <Badge className="bg-emerald-600 text-white">
                                                            {trek.category}
                                                        </Badge>
                                                        {trek.availability <= 5 && (
                                                            <Badge className="bg-red-500 text-white">
                                                                Only {trek.availability} left
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <div className="absolute top-4 right-4">
                                                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center text-sm">
                                                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                                            <span className="font-semibold">{trek.rating}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <CardContent className="p-6">
                                                    <div className="space-y-4">
                                                        <div>
                                                            <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                                                                {trek.title}
                                                            </h3>
                                                            <div className="flex items-center text-gray-600 text-sm">
                                                                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                                                                <span className="line-clamp-1">{trek.location}</span>
                                                            </div>
                                                        </div>

                                                        <p className="text-gray-600 text-sm line-clamp-2">
                                                            {trek.description}
                                                        </p>

                                                        <div className="flex items-center justify-between text-sm">
                                                            <div className="flex items-center space-x-4">
                                                                <div className="flex items-center">
                                                                    <Clock className="w-4 h-4 text-emerald-600 mr-1" />
                                                                    <span>{trek.duration}</span>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <Users className="w-4 h-4 text-emerald-600 mr-1" />
                                                                    <span>{trek.availability}</span>
                                                                </div>
                                                            </div>
                                                            <Badge
                                                                variant="secondary"
                                                                className={getDifficultyColor(trek.difficulty)}
                                                            >
                                                                {trek.difficulty}
                                                            </Badge>
                                                        </div>

                                                        <div className="flex items-center justify-between pt-4 border-t">
                                                            <div>
                                                                <span className="text-2xl font-bold text-emerald-600">
                                                                    ₹{trek.cost}
                                                                </span>
                                                                <span className="text-gray-600 text-sm"> / person</span>
                                                            </div>
                                                            <Button
                                                                size="sm"
                                                                className="bg-emerald-600 hover:bg-emerald-700"
                                                                onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    router.push(APP_ROUTES.TREK_DETAIL(trek.id))
                                                                }}
                                                            >
                                                                View Details
                                                                <ChevronRight className="w-4 h-4 ml-1" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="max-w-md mx-auto">
                                        <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                            <Search className="w-8 h-8 text-gray-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            No treks found
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            Try adjusting your filters to find the perfect trek for your adventure.
                                        </p>
                                        <Button
                                            onClick={clearFilters}
                                            className="bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            Clear All Filters
                                        </Button>
                                    </div>
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
