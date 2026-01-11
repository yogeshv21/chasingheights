'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    MapPin,
    Clock,
    Users,
    Star,
    Calendar,
    CheckCircle2,
    XCircle,
    ArrowLeft,
    Mountain,
    Utensils,
    Bed,
    CalendarIcon,
    ImageIcon,
    Check,
} from 'lucide-react'
import type { Trek } from '@/types/trek'
import { APP_ROUTES } from '@/lib/constants/routes'
import { ImageWithFallback } from '@/components/shared/ImageWithFallback'

interface Props {
    trek: Trek
}

export function TrekDetailClient({ trek }: Props) {
    const router = useRouter()
    const [showBookingDialog, setShowBookingDialog] = useState(false)

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real app, this would send data to an API
        alert('Booking request received! We will contact you shortly to confirm details.')
        setShowBookingDialog(false)
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Back Button */}
                    <Button
                        variant="ghost"
                        onClick={() => router.push(APP_ROUTES.TREKS)}
                        className="mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Treks
                    </Button>

                    {/* Hero Section */}
                    <div className="relative h-96 rounded-lg overflow-hidden mb-8">
                        <ImageWithFallback
                            src={trek.image}
                            alt={trek.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                            <div className="p-8 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-emerald-600">{trek.category}</Badge>
                                    {trek.availability <= 5 && (
                                        <Badge className="bg-red-500">Only {trek.availability} spots left</Badge>
                                    )}
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-2">{trek.title}</h1>
                                <div className="flex items-center text-lg">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    {trek.location}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Overview Tabs */}
                            <Tabs defaultValue="overview" className="w-full">
                                <TabsList className="grid w-full grid-cols-5">
                                    <TabsTrigger value="overview">Overview</TabsTrigger>
                                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                                    <TabsTrigger value="route">Route</TabsTrigger>
                                    <TabsTrigger value="calendar">Availability</TabsTrigger>
                                </TabsList>

                                {/* Overview Tab */}
                                <TabsContent value="overview" className="space-y-6">
                                    {/* Description */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>About This Trek</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700 leading-relaxed mb-6">{trek.description}</p>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="flex items-center">
                                                    <Clock className="w-5 h-5 text-emerald-600 mr-3" />
                                                    <div>
                                                        <p className="font-semibold">Duration</p>
                                                        <p className="text-gray-600">{trek.duration}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <Users className="w-5 h-5 text-emerald-600 mr-3" />
                                                    <div>
                                                        <p className="font-semibold">Availability</p>
                                                        <p className="text-gray-600">{trek.availability} spots available</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <Mountain className="w-5 h-5 text-emerald-600 mr-3" />
                                                    <div>
                                                        <p className="font-semibold">Difficulty</p>
                                                        <Badge variant="outline">{trek.difficulty}</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <CalendarIcon className="w-5 h-5 text-emerald-600 mr-3" />
                                                    <div>
                                                        <p className="font-semibold">Best Season</p>
                                                        <p className="text-gray-600">{trek.season}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Highlights */}
                                    {trek.highlights && trek.highlights.length > 0 && (
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Trek Highlights</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid md:grid-cols-2 gap-3">
                                                    {trek.highlights.map((highlight, index) => (
                                                        <div key={index} className="flex items-start space-x-3">
                                                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                                            <span className="text-gray-700">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}

                                    {/* What's Included */}
                                    {trek.included && trek.included.length > 0 && (
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>What's Included</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid md:grid-cols-2 gap-3">
                                                    {trek.included.map((item, index) => (
                                                        <div key={index} className="flex items-start space-x-3">
                                                            <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                                            <span className="text-gray-700">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}
                                </TabsContent>

                                {/* Gallery Tab */}
                                <TabsContent value="gallery">
                                    {trek.gallery ? (
                                        <Card>
                                            <CardContent className="p-6">
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                    {trek.gallery.photos && trek.gallery.photos.map((photo, index) => (
                                                        <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                                                            <ImageWithFallback
                                                                src={photo}
                                                                alt={trek.title}
                                                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ) : (
                                        <Card>
                                            <CardContent className="text-center py-12">
                                                <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Gallery Available</h3>
                                                <p className="text-gray-600">Gallery content will be available soon.</p>
                                            </CardContent>
                                        </Card>
                                    )}
                                </TabsContent>

                                {/* Itinerary Tab */}
                                <TabsContent value="itinerary">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Day-by-Day Itinerary</CardTitle>
                                            <CardDescription>
                                                Detailed breakdown of your adventure
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {trek.itinerary && trek.itinerary.length > 0 ? (
                                                <Accordion type="single" collapsible className="w-full">
                                                    {trek.itinerary.map((day, index) => (
                                                        <AccordionItem key={index} value={`day-${day.day}`}>
                                                            <AccordionTrigger className="text-left">
                                                                <div>
                                                                    <div className="font-semibold">
                                                                        Day {day.day}: {day.title}
                                                                    </div>
                                                                    <div className="text-sm text-gray-600 mt-1">
                                                                        Altitude: {day.altitude}
                                                                        {day.walkingHours && ` • Walking: ${day.walkingHours}`}
                                                                        {day.drivingHours && ` • Driving: ${day.drivingHours}`}
                                                                    </div>
                                                                </div>
                                                            </AccordionTrigger>
                                                            <AccordionContent className="space-y-4">
                                                                <p className="text-gray-700">{day.description}</p>
                                                                <div className="grid md:grid-cols-3 gap-4 text-sm">
                                                                    <div className="flex items-center">
                                                                        <Bed className="w-4 h-4 text-emerald-600 mr-2" />
                                                                        <span>{day.accommodation}</span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <Utensils className="w-4 h-4 text-emerald-600 mr-2" />
                                                                        <span>{day.meals}</span>
                                                                    </div>
                                                                    <div className="flex items-center">
                                                                        <Mountain className="w-4 h-4 text-emerald-600 mr-2" />
                                                                        <span>{day.altitude}</span>
                                                                    </div>
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ))}
                                                </Accordion>
                                            ) : (
                                                <p className="text-gray-600 text-center py-8">
                                                    Detailed itinerary will be provided upon booking.
                                                </p>
                                            )}
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Route Tab */}
                                <TabsContent value="route">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Route Map</CardTitle>
                                            <CardDescription>
                                                Key waypoints and route information
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {trek.routeMap && trek.routeMap.waypoints.length > 0 ? (
                                                <div className="space-y-4">
                                                    <div className="grid gap-4">
                                                        {trek.routeMap.waypoints.map((waypoint, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                                                            >
                                                                <div className="flex items-center space-x-3">
                                                                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                                                        {index + 1}
                                                                    </div>
                                                                    <div>
                                                                        <h4 className="font-semibold text-gray-900">{waypoint.name}</h4>
                                                                        <p className="text-sm text-gray-600">
                                                                            Altitude: {waypoint.altitude}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="text-right text-sm text-gray-500">
                                                                    <p>{waypoint.lat.toFixed(4)}°</p>
                                                                    <p>{waypoint.lng.toFixed(4)}°</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <p className="text-gray-600 text-center py-8">
                                                    Route map will be provided upon booking.
                                                </p>
                                            )}
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Availability Tab */}
                                <TabsContent value="calendar">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <CalendarIcon className="w-5 h-5" />
                                                Available Dates & Pricing
                                            </CardTitle>
                                            <CardDescription>
                                                View available departure dates, pricing, and seat availability by month
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {trek.monthlyAvailability && trek.monthlyAvailability.length > 0 ? (
                                                <Accordion type="single" collapsible className="w-full">
                                                    {trek.monthlyAvailability.map((monthData, index) => (
                                                        <AccordionItem key={index} value={`month-${monthData.month}-${monthData.year}`}>
                                                            <AccordionTrigger className="text-left">
                                                                <div className="flex items-center justify-between w-full pr-4">
                                                                    <div>
                                                                        <div className="font-semibold text-lg">{monthData.month} {monthData.year}</div>
                                                                        <div className="text-sm text-gray-600 mt-1">
                                                                            {monthData.dates?.length || 0} departure{monthData.dates?.length !== 1 ? 's' : ''} available
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="space-y-3">
                                                                    {monthData.dates && monthData.dates.map((dateData, dateIndex) => (
                                                                        <div
                                                                            key={dateIndex}
                                                                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                                                                        >
                                                                            <div className="flex items-center space-x-4">
                                                                                <div className="text-center">
                                                                                    <div className="text-2xl font-bold text-emerald-600">
                                                                                        {new Date(dateData.date).getDate()}
                                                                                    </div>
                                                                                    <div className="text-xs text-gray-600">
                                                                                        {new Date(dateData.date).toLocaleDateString('en-US', { weekday: 'short' })}
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="font-semibold text-gray-900">
                                                                                        {new Date(dateData.date).toLocaleDateString('en-US', {
                                                                                            month: 'long',
                                                                                            day: 'numeric',
                                                                                            year: 'numeric'
                                                                                        })}
                                                                                    </div>
                                                                                    <div className="text-sm text-gray-600 mt-1">
                                                                                        {dateData.seatsAvailable} seat{dateData.seatsAvailable !== 1 ? 's' : ''} available
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="text-right">
                                                                                <div className="text-xl font-bold text-emerald-600">
                                                                                    ₹{dateData.price}
                                                                                </div>
                                                                                <Button
                                                                                    size="sm"
                                                                                    onClick={() => setShowBookingDialog(true)}
                                                                                    className="mt-2 bg-emerald-600 hover:bg-emerald-700"
                                                                                >
                                                                                    Book Now
                                                                                </Button>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ))}
                                                </Accordion>
                                            ) : (
                                                <div className="text-center py-12">
                                                    <CalendarIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Availability Coming Soon</h3>
                                                    <p className="text-gray-600 mb-6">
                                                        Detailed availability calendar will be available soon. Contact us for current availability.
                                                    </p>
                                                    <Button
                                                        onClick={() => setShowBookingDialog(true)}
                                                        className="bg-emerald-600 hover:bg-emerald-700"
                                                    >
                                                        Check Availability
                                                    </Button>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Booking Card */}
                            <Card className="sticky top-8">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        <span>Book This Trek</span>
                                        <div className="flex items-center">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                            <span className="text-sm">
                                                {trek.rating} ({trek.reviews})
                                            </span>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-emerald-600">₹{trek.cost}</div>
                                        <div className="text-sm text-gray-600">per person</div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Duration:</span>
                                            <span className="font-semibold">{trek.duration}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Difficulty:</span>
                                            <Badge variant="outline" className="text-xs">
                                                {trek.difficulty}
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Available spots:</span>
                                            <span className="font-semibold">{trek.availability}</span>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <Button
                                            onClick={() => setShowBookingDialog(true)}
                                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                                            size="lg"
                                        >
                                            Book Now
                                        </Button>
                                    </div>

                                    <div className="text-xs text-gray-500 text-center">
                                        Free cancellation up to 30 days before departure
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Book {trek.title}</DialogTitle>
                        <DialogDescription>
                            Fill out the form below to request a booking. We'll get back to you within 24 hours.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleBookingSubmit} className="space-y-4 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <Input id="firstName" required placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input id="lastName" required placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" required placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone number</Label>
                            <Input id="phone" type="tel" required placeholder="+91 98765 43210" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="travelers">Travelers</Label>
                                <Input id="travelers" type="number" min="1" defaultValue="1" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="date">Preferred Date</Label>
                                <Input id="date" type="date" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Special Requests</Label>
                            <textarea
                                id="message"
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Any dietary restrictions or special requirements?"
                            />
                        </div>
                        <DialogFooter className="mt-6">
                            <Button type="button" variant="outline" onClick={() => setShowBookingDialog(false)}>
                                Cancel
                            </Button>
                            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                                Submit Request
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            <Footer />
        </>
    )
}
