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
    Flag,
    Route,
    User,
    Mail,
    Phone,
    Users,
    ChevronLeft,
    ChevronRight,
    X,
    Maximize2,
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
    const [imageError, setImageError] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

    const nextImage = () => {
        if (selectedImageIndex === null || !trek.gallery?.photos) return
        setSelectedImageIndex((selectedImageIndex + 1) % trek.gallery.photos.length)
    }

    const prevImage = () => {
        if (selectedImageIndex === null || !trek.gallery?.photos) return
        setSelectedImageIndex((selectedImageIndex - 1 + trek.gallery.photos.length) % trek.gallery.photos.length)
    }

    const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const firstName = formData.get('firstName')
        const lastName = formData.get('lastName')
        const email = formData.get('email')
        const phone = formData.get('phone')
        const travelers = formData.get('travelers')
        const date = formData.get('date')

        const message = `*New Trek Booking Request*
        
*Trek:* ${trek.title}
*Name:* ${firstName} ${lastName}
*Email:* ${email}
*Phone:* ${phone}
*Travelers:* ${travelers}
*Preferred Date:* ${date}
*Location:* ${trek.location}`

        const phoneNumber = '918319931901'
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

        window.open(whatsappUrl, '_blank')
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
                    <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8 bg-black">
                        {(trek.image && !imageError) ? (
                            <Image
                                src={trek.image}
                                alt={trek.title}
                                fill
                                className="object-cover"
                                priority
                                onError={() => setImageError(true)}
                            />
                        ) : null}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                            <div className="p-8 text-white w-full">
                                <div className="flex items-center gap-2 mb-4">
                                    <Badge className="bg-emerald-600 hover:bg-emerald-600 border-none px-3">
                                        {trek.category}
                                    </Badge>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                                    {trek.title}
                                </h1>
                                <div className="flex items-center text-lg text-gray-200">
                                    <MapPin className="w-5 h-5 mr-2 text-emerald-400" />
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
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="overview">Overview</TabsTrigger>
                                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                                </TabsList>

                                {/* Overview Tab */}
                                <TabsContent value="overview" className="space-y-6 mt-2">
                                    {/* Quick Facts */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Quick Facts</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="flex items-center">
                                                    <Clock className="w-5 h-5 text-emerald-600 mr-3" />
                                                    <div>
                                                        <p className="font-semibold text-sm">Duration</p>
                                                        <p className="text-gray-600">{trek.duration}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <Mountain className="w-5 h-5 text-emerald-600 mr-3" />
                                                    <div>
                                                        <p className="font-semibold text-sm">Difficulty</p>
                                                        <Badge variant="outline" className="border-emerald-200 text-emerald-700 mt-1">{trek.difficulty}</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <CalendarIcon className="w-5 h-5 text-emerald-600 mr-3" />
                                                    <div>
                                                        <p className="font-semibold text-sm">Best Season</p>
                                                        <p className="text-gray-600">{trek.season}</p>
                                                    </div>
                                                </div>

                                                {trek.basecamp && (
                                                    <div className="flex items-center">
                                                        <Flag className="w-5 h-5 text-emerald-600 mr-3" />
                                                        <div>
                                                            <p className="font-semibold text-sm">Basecamp</p>
                                                            <p className="text-gray-600">{trek.basecamp}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {trek.highestAltitude && (
                                                    <div className="flex items-center">
                                                        <Mountain className="w-5 h-5 text-emerald-600 mr-3" />
                                                        <div>
                                                            <p className="font-semibold text-sm">Highest Altitude</p>
                                                            <p className="text-gray-600">{trek.highestAltitude}</p>
                                                        </div>
                                                    </div>
                                                )}

                                                {trek.totalDistance && (
                                                    <div className="flex items-center">
                                                        <Route className="w-5 h-5 text-emerald-600 mr-3" />
                                                        <div>
                                                            <p className="font-semibold text-sm">Distance</p>
                                                            <p className="text-gray-600">{trek.totalDistance}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Description */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>About This Trek</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-700 leading-relaxed">{trek.description}</p>
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

                                    {/* What's Not Included */}
                                    {trek.notIncluded && trek.notIncluded.length > 0 && (
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>What's Not Included</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="grid md:grid-cols-2 gap-3">
                                                    {trek.notIncluded.map((item, index) => (
                                                        <div key={index} className="flex items-start space-x-3">
                                                            <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-gray-700">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}
                                </TabsContent>

                                {/* Gallery Tab */}
                                <TabsContent value="gallery" className="mt-3">
                                    {trek.gallery ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            {trek.gallery.photos && trek.gallery.photos.map((photo, index) => (
                                                <div
                                                    key={index}
                                                    className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                                                    onClick={() => setSelectedImageIndex(index)}
                                                >
                                                    <ImageWithFallback
                                                        src={photo}
                                                        alt={`${trek.title} gallery ${index + 1}`}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                                                        <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <Card className="border-dashed border-2">
                                            <CardContent className="text-center py-12">
                                                <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Gallery Available</h3>
                                                <p className="text-gray-600">Gallery content will be available soon.</p>
                                            </CardContent>
                                        </Card>
                                    )}
                                </TabsContent>

                                {/* Itinerary Tab */}
                                <TabsContent value="itinerary" className="mt-3">
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
                                                                        {day.distance && `Distance: ${day.distance}`}
                                                                        {day.altitude && `${day.distance ? ' • ' : ''}Altitude: ${day.altitude}`}
                                                                        {day.duration && ` • Duration: ${day.duration}`}
                                                                    </div>
                                                                </div>
                                                            </AccordionTrigger>
                                                            <AccordionContent className="pb-6 pt-2">
                                                                <div className="bg-emerald-50/30 border-l-4 border-emerald-500 p-5 rounded-r-xl shadow-sm">
                                                                    <p className="text-gray-700 leading-relaxed">{day.description}</p>
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



                            </Tabs>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Booking Card */}
                            <Card className="sticky top-24 border-gray-100 shadow-xl overflow-hidden">
                                <div className="bg-emerald-600 px-6 py-4">
                                    <h3 className="text-white font-bold text-lg">Book Your Adventure</h3>
                                </div>

                                <CardContent className="p-6 space-y-6">
                                    <div className="text-center pb-6 border-b border-gray-50">
                                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">Total Cost</div>
                                        <div className="flex items-center justify-center gap-1">
                                            <span className="text-4xl font-extrabold text-gray-900">₹{trek.cost.toLocaleString('en-IN')}</span>
                                        </div>
                                        <div className="text-sm text-emerald-600 font-semibold mt-1">per person</div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center text-gray-600">
                                                <Clock className="w-4 h-4 mr-3 text-emerald-600" />
                                                <span className="text-sm font-medium">Duration</span>
                                            </div>
                                            <span className="text-sm font-bold text-gray-900">{trek.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center text-gray-600">
                                                <Mountain className="w-4 h-4 mr-3 text-emerald-600" />
                                                <span className="text-sm font-medium">Difficulty</span>
                                            </div>
                                            <Badge className={`${trek.difficulty.toLowerCase() === 'easy' ? 'bg-green-100 text-green-700' :
                                                trek.difficulty.toLowerCase() === 'moderate' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                                } border-none shadow-none font-bold`}>
                                                {trek.difficulty}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <Button
                                            onClick={() => setShowBookingDialog(true)}
                                            className="w-full bg-emerald-600 hover:bg-emerald-700 h-14 text-lg font-bold shadow-lg shadow-emerald-100 transition-all active:scale-95"
                                        >
                                            Book This Trek
                                        </Button>
                                    </div>

                                    <div className="text-[10px] text-gray-400 text-center">
                                        Free cancellation up to 30 days before departure.
                                        <br />Terms & conditions apply.
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
                <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden border-none shadow-2xl">
                    <DialogHeader className="bg-emerald-600 px-8 py-10 text-white relative">
                        <DialogTitle className="text-3xl font-bold mb-2">Book Your Trek</DialogTitle>
                        <DialogDescription className="text-emerald-50 text-base opacity-90 leading-relaxed">
                            Adventure is just a few clicks away. Fill in your details and we'll handle the rest.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleBookingSubmit} className="p-8 space-y-6 bg-white">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700 ml-1">First Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input id="firstName" name="firstName" required placeholder="John" className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700 ml-1">Last Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input id="lastName" name="lastName" required placeholder="Doe" className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg transition-all" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input id="email" name="email" type="email" required placeholder="john@example.com" className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">Phone Number</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg transition-all" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="travelers" className="text-sm font-semibold text-gray-700 ml-1">Travelers</Label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input id="travelers" name="travelers" type="number" min="1" defaultValue="1" required className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="date" className="text-sm font-semibold text-gray-700 ml-1">Preferred Date</Label>
                                <div className="relative">
                                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input id="date" name="date" type="date" required className="pl-10 h-12 border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-lg transition-all" />
                                </div>
                            </div>
                        </div>

                        <DialogFooter className="mt-8 pt-6 border-t border-gray-50 flex sm:justify-between items-center gap-4">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => setShowBookingDialog(false)}
                                className="text-gray-500 hover:text-gray-700 hover:bg-gray-50 h-12 px-6"
                            >
                                Not ready yet
                            </Button>
                            <Button
                                type="submit"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-10 font-bold rounded-lg shadow-lg shadow-emerald-100 transition-all active:scale-95"
                            >
                                Confirm Booking Request
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

            <Footer />

            {/* Lightbox */}
            {selectedImageIndex !== null && trek.gallery?.photos && (
                <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm animate-in fade-in duration-300 flex items-center justify-center p-4 md:p-10">
                    <button
                        onClick={() => setSelectedImageIndex(null)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10 p-2"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center">
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-0 md:-left-4 text-white/50 hover:text-white transition-all transform hover:scale-110 z-10 p-4"
                        >
                            <ChevronLeft className="w-12 h-12" />
                        </button>

                        <div className="relative w-full h-full max-w-5xl max-h-[85vh] group">
                            <ImageWithFallback
                                key={selectedImageIndex}
                                src={trek.gallery.photos[selectedImageIndex]}
                                alt="Gallery preview"
                                className="w-full h-full object-contain animate-in zoom-in-95 duration-500"
                            />

                            <div className="absolute bottom-[-40px] left-0 right-0 text-center text-white/70 font-medium tracking-widest text-sm">
                                {selectedImageIndex + 1} / {trek.gallery.photos.length}
                            </div>
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-0 md:-right-4 text-white/50 hover:text-white transition-all transform hover:scale-110 z-10 p-4"
                        >
                            <ChevronRight className="w-12 h-12" />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
