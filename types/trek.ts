export interface Gallery {
    photos: string[]
    videos: GalleryVideo[]
}

export interface GalleryVideo {
    id: string
    title: string
    thumbnail: string
    youtubeId: string
    duration: string
}

export interface AvailableDate {
    date: string
    price: number
    seatsAvailable: number
    status: 'available' | 'limited' | 'full'
}

export interface MonthlyAvailability {
    month: string
    year: number
    dates: AvailableDate[]
}

export interface ItineraryDay {
    day: number
    title: string
    description: string
    accommodation: string
    meals: string
    distance?: string
    duration: string
}

export interface RouteMap {
    waypoints: Waypoint[]
}

export interface Waypoint {
    name: string
    lat: number
    lng: number
    altitude: string
}

export interface Trek {
    id: string
    title: string
    location: string
    duration: string
    difficulty: string
    cost: number
    season: string
    months: string[]
    description: string
    image: string
    availability: number
    category: string
    highlights?: string[]
    included?: string[]
    notIncluded?: string[]
    itinerary?: ItineraryDay[]
    routeMap?: RouteMap
    gallery?: Gallery
    monthlyAvailability?: MonthlyAvailability[]
    basecamp?: string
    highestAltitude?: string
    totalDistance?: string
}

export interface TrekFilters {
    category?: string
    difficulty?: string
    minCost?: number
    maxCost?: number
    searchQuery?: string
}
