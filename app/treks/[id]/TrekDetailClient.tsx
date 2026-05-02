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
import { motion, AnimatePresence } from 'motion/react'
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
    Activity,
    Compass,
    Stars,
    Shield,
    Heart,
    Share2,
    AlertCircle,
    TrendingUp,
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

    const handleShare = () => {
        const shareText = `Check out this amazing trek: ${trek.title} at Chasing Heights!`
        const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <>
            <div className="bg-white min-h-screen">
                <Header />
                <main className="pb-20">
                    {/* Immersive Hero Section */}
                    <section className="relative h-[65vh] md:h-[80vh] w-full overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <ImageWithFallback
                                src={trek.image}
                                alt={trek.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between px-4 md:px-8 py-10 md:py-16">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-between items-start"
                            >
                                <Button
                                    variant="outline"
                                    onClick={() => router.push('/treks')}
                                    className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all rounded-full px-6"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    All Treks
                                </Button>
                                <div className="flex gap-3">
                                    <Button
                                        onClick={handleShare}
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                                    >
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </motion.div>

                            <div className="max-w-4xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="space-y-4"
                                >
                                    <div className="flex flex-wrap gap-2">
                                        <Badge className="bg-emerald-500/90 text-white backdrop-blur-md border-none px-4 py-1 text-xs uppercase tracking-widest font-bold">
                                            {trek.category}
                                        </Badge>
                                        <Badge className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-4 py-1 text-xs uppercase tracking-widest font-bold">
                                            {trek.difficulty}
                                        </Badge>
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                                        {trek.title}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-6 text-white/90">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-white/10 rounded-full backdrop-blur-md">
                                                <MapPin className="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <span className="text-lg font-medium">{trek.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-white/10 rounded-full backdrop-blur-md">
                                                <Clock className="w-4 h-4 text-emerald-400" />
                                            </div>
                                            <span className="text-lg font-medium">{trek.duration}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Scroll Indicator - Moved higher to avoid clutter */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
                        >
                            <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1">
                                <div className="w-1 h-1.5 bg-white/40 rounded-full" />
                            </div>
                        </motion.div>
                    </section>

                    <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-6">
                            {/* Left Column: Main Details */}
                            <div className="lg:col-span-8 space-y-16">
                                {/* Modern Tabs - Minimalist Sliding Underline */}
                                <Tabs defaultValue="overview" className="w-full">
                                    <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100 -mx-4 px-4 md:-mx-8 md:px-8 mb-6">
                                        <TabsList className="flex items-center justify-center h-16 bg-transparent p-0 gap-10">
                                            <TabsTrigger
                                                value="overview"
                                                className="relative h-full rounded-none border-none bg-transparent px-2 text-base font-bold text-gray-400 transition-all data-[state=active]:text-emerald-600 group"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <Activity className="w-4 h-4" />
                                                    Overview
                                                </span>
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-600 rounded-t-full scale-x-0 group-data-[state=active]:scale-x-100 transition-transform duration-300" />
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="gallery"
                                                className="relative h-full rounded-none border-none bg-transparent px-2 text-base font-bold text-gray-400 transition-all data-[state=active]:text-emerald-600 group"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <ImageIcon className="w-4 h-4" />
                                                    Gallery
                                                </span>
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-600 rounded-t-full scale-x-0 group-data-[state=active]:scale-x-100 transition-transform duration-300" />
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="itinerary"
                                                className="relative h-full rounded-none border-none bg-transparent px-2 text-base font-bold text-gray-400 transition-all data-[state=active]:text-emerald-600 group"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    Itinerary
                                                </span>
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-600 rounded-t-full scale-x-0 group-data-[state=active]:scale-x-100 transition-transform duration-300" />
                                            </TabsTrigger>
                                        </TabsList>
                                    </div>

                                    {/* Overview Tab Content */}
                                    <TabsContent value="overview" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                        {/* Quick Facts Grid - Redesigned */}
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                            {[
                                                { icon: Clock, label: "Duration", value: trek.duration, color: "text-blue-600", bg: "bg-blue-50" },
                                                { icon: Mountain, label: "Difficulty", value: trek.difficulty, color: "text-orange-600", bg: "bg-orange-50" },
                                                { icon: CalendarIcon, label: "Best Season", value: trek.season, color: "text-emerald-600", bg: "bg-emerald-50" },
                                                { icon: Flag, label: "Basecamp", value: trek.basecamp, color: "text-purple-600", bg: "bg-purple-50" },
                                                { icon: TrendingUp, label: "Max Altitude", value: trek.highestAltitude, color: "text-red-600", bg: "bg-red-50" },
                                                { icon: Route, label: "Distance", value: trek.totalDistance, color: "text-indigo-600", bg: "bg-indigo-50" }
                                            ].map((fact, i) => fact.value && (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 * i }}
                                                    className="p-5 rounded-2xl border border-gray-100 bg-white hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all group"
                                                >
                                                    <div className={`w-10 h-10 ${fact.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                                        <fact.icon className={`w-5 h-5 ${fact.color}`} />
                                                    </div>
                                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{fact.label}</p>
                                                    <p className="text-base font-bold text-gray-900 leading-tight">{fact.value}</p>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* About Section - Simplified Card */}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-1 h-8 bg-emerald-500 rounded-full" />
                                                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">The Experience</h2>
                                            </div>
                                            <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                                {trek.description}
                                            </p>
                                        </div>

                                        {/* Trek Highlights - Added Back */}
                                        {trek.highlights && trek.highlights.length > 0 && (
                                            <section className="space-y-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-1 h-8 bg-emerald-500 rounded-full" />
                                                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Trek Highlights</h2>
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {trek.highlights.map((highlight, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/30 border border-emerald-100/50 group hover:bg-emerald-50 transition-colors"
                                                        >
                                                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                                <Stars className="w-4 h-4 text-emerald-600" />
                                                            </div>
                                                            <span className="text-gray-700 font-medium leading-relaxed">{highlight}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </section>
                                        )}

                                        {/* Best Time & Difficulty - Side by Side or Stacked */}
                                        <div className="grid md:grid-cols-1 gap-12">
                                            {trek.bestTime && (
                                                <section className="space-y-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-1 h-8 bg-emerald-500 rounded-full" />
                                                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{trek.bestTime.title}</h2>
                                                    </div>
                                                    <Card className="border-none bg-emerald-50/40 shadow-none rounded-3xl p-6 md:p-8">
                                                        <div className="space-y-8">
                                                            <p className="text-gray-700 leading-relaxed font-medium">{trek.bestTime.description}</p>
                                                            <div className="grid sm:grid-cols-2 gap-6">
                                                                {trek.bestTime.seasons.map((season, idx) => (
                                                                    <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-emerald-100/50">
                                                                        <div className="font-bold text-emerald-900 mb-1">{season.name}</div>
                                                                        <div className="text-sm text-emerald-600 font-medium">{season.months}</div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </section>
                                            )}

                                            {trek.difficultyDetail && (
                                                <section className="space-y-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-1 h-8 bg-emerald-500 rounded-full" />
                                                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Challenge Level</h2>
                                                    </div>
                                                    <div className="grid sm:grid-cols-2 gap-6">
                                                        {trek.difficultyDetail.items.map((item, idx) => (
                                                            <div key={idx} className="p-6 rounded-3xl border border-gray-100 bg-white hover:border-emerald-100 transition-colors">
                                                                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                                                                    {item.title}
                                                                </h4>
                                                                <p className="text-sm text-gray-600 leading-relaxed">{item.content}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </section>
                                            )}
                                        </div>

                                        {/* Inclusions & Exclusions - Side by Side */}
                                        <div className="grid md:grid-cols-2 gap-8">
                                            {trek.included && (
                                                <div className="space-y-6">
                                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                                                        What's Included
                                                    </h3>
                                                    <ul className="space-y-4">
                                                        {trek.included.map((item, i) => (
                                                            <li key={i} className="flex gap-3 text-gray-600">
                                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                                                <span className="text-sm font-medium">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {trek.notIncluded && (
                                                <div className="space-y-6">
                                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                                        <XCircle className="w-6 h-6 text-red-500" />
                                                        Not Included
                                                    </h3>
                                                    <ul className="space-y-4">
                                                        {trek.notIncluded.map((item, i) => (
                                                            <li key={i} className="flex gap-3 text-gray-600">
                                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                                                <span className="text-sm font-medium">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </TabsContent>

                                    {/* Gallery Tab Content */}
                                    <TabsContent value="gallery" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                        {trek.gallery ? (
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {trek.gallery.photos && trek.gallery.photos.map((photo, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.05 }}
                                                        className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                                                        onClick={() => setSelectedImageIndex(index)}
                                                    >
                                                        <ImageWithFallback
                                                            src={photo}
                                                            alt={`${trek.title} gallery ${index + 1}`}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                                                                <Maximize2 className="w-6 h-6 text-white" />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-20 bg-gray-50 rounded-[32px] border-2 border-dashed border-gray-200">
                                                <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                                <h3 className="text-lg font-bold text-gray-900">Gallery Coming Soon</h3>
                                                <p className="text-gray-500">We're currently processing the stunning visuals for this trek.</p>
                                            </div>
                                        )}
                                    </TabsContent>

                                    {/* Itinerary Tab Content */}
                                    <TabsContent value="itinerary" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                        <div className="space-y-8">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Day-by-Day Journey</h2>
                                                    <p className="text-gray-500">A detailed breakdown of your adventure</p>
                                                </div>
                                            </div>

                                            {trek.itinerary && trek.itinerary.length > 0 ? (
                                                <div className="space-y-4">
                                                    {trek.itinerary.map((day, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                        >
                                                            <Accordion type="single" collapsible className="w-full">
                                                                <AccordionItem value={`day-${day.day}`} className="border-none mb-4 overflow-hidden">
                                                                    <AccordionTrigger className="hover:no-underline p-0 group">
                                                                        <div className="flex items-center gap-6 w-full text-left bg-gray-50 group-data-[state=open]:bg-emerald-50 p-6 rounded-3xl transition-colors">
                                                                            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 shrink-0">
                                                                                <span className="text-xs font-black text-emerald-600 uppercase">Day</span>
                                                                                <span className="text-2xl font-black text-gray-900 leading-none">{day.day}</span>
                                                                            </div>
                                                                            <div className="flex-1">
                                                                                <h4 className="text-lg font-bold text-gray-900 group-data-[state=open]:text-emerald-900 transition-colors">
                                                                                    {day.title}
                                                                                </h4>
                                                                                <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-500 font-medium">
                                                                                    {day.distance && (
                                                                                        <span className="flex items-center gap-1.5">
                                                                                            <Route className="w-3.5 h-3.5" />
                                                                                            {day.distance}
                                                                                        </span>
                                                                                    )}
                                                                                    {day.altitude && (
                                                                                        <span className="flex items-center gap-1.5">
                                                                                            <TrendingUp className="w-3.5 h-3.5" />
                                                                                            {day.altitude}
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </AccordionTrigger>
                                                                    <AccordionContent className="pt-2 pb-6 px-6">
                                                                        <div className="pl-20">
                                                                            <div className="bg-white border-l-2 border-emerald-200 pl-8 py-2">
                                                                                <p className="text-gray-600 leading-relaxed text-base font-medium">
                                                                                    {day.description}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </AccordionContent>
                                                                </AccordionItem>
                                                            </Accordion>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-center py-20 bg-gray-50 rounded-[32px]">
                                                    <p className="text-gray-500 font-medium italic">Detailed itinerary will be shared upon booking confirmation.</p>
                                                </div>
                                            )}
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>

                            {/* Right Column: Sticky Sidebar */}
                            <div className="lg:col-span-4">
                                <div className="sticky top-24 space-y-6">
                                    <Card className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[32px] overflow-hidden">
                                        <div className="p-8 space-y-8">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Starting from</p>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-4xl font-black text-gray-900">₹{trek.cost.toLocaleString('en-IN')}</span>
                                                        <span className="text-gray-500 font-medium">/person</span>
                                                    </div>
                                                </div>
                                                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none px-3 py-1 font-bold">
                                                    Best Price
                                                </Badge>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                                        <Users className="w-5 h-5 text-emerald-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Group Size</p>
                                                        <p className="text-sm font-bold text-gray-900">8 - 15 People</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button
                                                onClick={() => setShowBookingDialog(true)}
                                                className="w-full h-16 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold shadow-xl shadow-emerald-200 transition-all hover:scale-[1.02] active:scale-95"
                                            >
                                                Check Availability
                                            </Button>

                                            <p className="text-center text-xs text-gray-400 font-medium">
                                                Instant confirmation via WhatsApp
                                            </p>
                                        </div>
                                    </Card>

                                    {/* Trust Banner */}
                                    <div className="p-6 rounded-[32px] bg-gray-900 text-white space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/10 rounded-lg">
                                                <AlertCircle className="w-5 h-5 text-emerald-400" />
                                            </div>
                                            <h4 className="font-bold">Need Help?</h4>
                                        </div>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            Our travel experts are available 24/7 to help you plan your perfect trek.
                                        </p>
                                        <Button asChild variant="link" className="text-emerald-400 p-0 h-auto font-bold hover:text-emerald-300">
                                            <a href="tel:+918319931901">Call Support →</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
                <DialogContent className="sm:max-w-[550px] p-0 md:overflow-hidden border-none shadow-2xl rounded-3xl max-h-[95vh] md:max-h-none flex flex-col md:block">
                    <DialogHeader className="bg-emerald-600 px-6 md:px-10 py-6 md:py-12 text-white relative shrink-0">
                        <DialogTitle className="text-xl md:text-4xl font-bold mb-1 md:mb-2">Book Your Trek</DialogTitle>
                        <DialogDescription className="text-emerald-50 text-xs md:text-lg opacity-90 leading-relaxed">
                            Adventure is just a few clicks away.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="overflow-y-auto md:overflow-visible flex-1 no-scrollbar">
                        <form onSubmit={handleBookingSubmit} className="p-5 md:p-10 space-y-5 md:space-y-8 bg-white">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName" className="text-xs md:text-sm font-semibold text-gray-700 ml-1">First Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input id="firstName" name="firstName" required placeholder="John" className="pl-10 h-12 md:h-14 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl transition-all md:text-base" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName" className="text-xs md:text-sm font-semibold text-gray-700 ml-1">Last Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input id="lastName" name="lastName" required placeholder="Doe" className="pl-10 h-12 md:h-14 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl transition-all md:text-base" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs md:text-sm font-semibold text-gray-700 ml-1">Email Address</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input id="email" name="email" type="email" required placeholder="john@example.com" className="pl-10 h-12 md:h-14 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl transition-all md:text-base" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-xs md:text-sm font-semibold text-gray-700 ml-1">Phone Number</Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" className="pl-10 h-12 md:h-14 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl transition-all md:text-base" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-5 md:gap-8">
                                <div className="space-y-2">
                                    <Label htmlFor="travelers" className="text-xs md:text-sm font-semibold text-gray-700 ml-1">Travelers</Label>
                                    <div className="relative">
                                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input id="travelers" name="travelers" type="number" min="1" defaultValue="1" required className="pl-10 h-12 md:h-14 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl transition-all md:text-base" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="date" className="text-xs md:text-sm font-semibold text-gray-700 ml-1">Preferred Date</Label>
                                    <div className="relative">
                                        <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <Input id="date" name="date" type="date" required className="pl-10 h-12 md:h-14 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl transition-all md:text-base" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-50 flex flex-col md:flex-row md:justify-between items-center gap-4">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={() => setShowBookingDialog(false)}
                                    className="text-gray-500 hover:text-gray-700 hover:bg-gray-50 h-12 md:h-14 px-8 w-full md:w-auto order-2 md:order-1 font-bold"
                                >
                                    Not ready yet
                                </Button>
                                <Button
                                    type="submit"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 md:h-14 px-12 font-bold rounded-xl shadow-lg shadow-emerald-100 transition-all active:scale-95 w-full md:w-auto order-1 md:order-2"
                                >
                                    Confirm Booking
                                </Button>
                            </div>
                        </form>
                    </div>
                </DialogContent>
                </Dialog>

                <Footer />
            </div>

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
