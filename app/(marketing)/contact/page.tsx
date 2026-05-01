'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
    Mail,
    Phone,
    Send,
    MessageCircle,
    MapPin,
    ShieldCheck,
    Globe2
} from 'lucide-react'
import { toast } from 'sonner'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: ''
    })
    const [loading, setLoading] = useState(false)

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields')
            return
        }

        const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL

        if (!scriptUrl || scriptUrl === 'YOUR_DEPLOYED_WEB_APP_URL_HERE') {
            toast.error('Google Sheet URL not configured. Please add it to your .env.local file.')
            return
        }

        setLoading(true)

        try {
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            toast.success('Message sent successfully! Opening WhatsApp...')
            
            // Construct WhatsApp message
            const waMessage = encodeURIComponent(
                `*New Inquiry - Chasing Heights*\n\n` +
                `*Name:* ${formData.name}\n` +
                `*Email:* ${formData.email}\n` +
                `*Phone:* ${formData.phone || 'N/A'}\n` +
                `*Subject:* ${formData.subject || 'N/A'}\n` +
                `*Inquiry:* ${formData.inquiryType || 'General'}\n\n` +
                `*Message:* ${formData.message}`
            );
            
            window.open(`https://wa.me/918319931901?text=${waMessage}`, '_blank');

            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                inquiryType: ''
            })
        } catch (error) {
            console.error('Error sending message:', error)
            toast.error('Failed to send message. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    const contactMethods = [
        {
            icon: <Mail className="h-5 w-5" />,
            title: "Email Us",
            details: "chasingheight@gmail.com",
            href: "mailto:chasingheight@gmail.com"
        },
        {
            icon: <Phone className="h-5 w-5" />,
            title: "Call Us",
            details: "+91 83199 31901",
            href: "tel:+918319931901"
        },
        {
            icon: <MessageCircle className="h-5 w-5" />,
            title: "WhatsApp",
            details: "Available 9 AM - 8 PM IST",
            href: "https://wa.me/918319931901"
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />
            
            <main className="flex-grow">
                {/* Hero Section with Gradient Background */}
                <section className="relative bg-emerald-700 text-white py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-700/50 to-emerald-800"></div>
                    
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-emerald-500/30 backdrop-blur-md rounded-full border border-emerald-400/30">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                            Let's Plan Your <span className="text-emerald-300">Next Peak</span>
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mx-auto font-medium opacity-90">
                            Whether you're ready to book or just exploring options, our adventure experts are here to guide you every step of the way.
                        </p>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Contact Info Sidebar - Left */}
                        <div className="lg:col-span-4 space-y-4">
                            {contactMethods.map((method, index) => (
                                <a 
                                    key={index} 
                                    href={method.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-1 rounded-2xl bg-white shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-200 transition-all group"
                                >
                                    <div className="flex items-center p-4 space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{method.title}</p>
                                            <p className="text-sm font-semibold text-slate-900 truncate">{method.details}</p>
                                        </div>
                                    </div>
                                </a>
                            ))}

                            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <h3 className="text-xl font-bold mb-8 flex items-center relative z-10">
                                    <Globe2 className="w-6 h-6 mr-3 text-emerald-400" />
                                    Your Journey Roadmap
                                </h3>
                                
                                <div className="space-y-8 relative z-10">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold shadow-[0_0_15px_rgba(16,185,129,0.5)]">1</div>
                                            <div className="w-0.5 h-full bg-slate-700 my-1"></div>
                                        </div>
                                        <div className="pb-4">
                                            <h4 className="font-bold text-slate-100 mb-1">Submit Your Details</h4>
                                            <p className="text-sm text-slate-400">Fill out the form with your basic info and trek interest.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">2</div>
                                            <div className="w-0.5 h-full bg-slate-700 my-1"></div>
                                        </div>
                                        <div className="pb-4">
                                            <h4 className="font-bold text-slate-100 mb-1">Expert Consultation</h4>
                                            <p className="text-sm text-slate-400">A guide will reach out within 4 hours to discuss your goals.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">3</div>
                                            <div className="w-0.5 h-full bg-slate-700 my-1"></div>
                                        </div>
                                        <div className="pb-4">
                                            <h4 className="font-bold text-slate-100 mb-1">Custom Itinerary</h4>
                                            <p className="text-sm text-slate-400">Receive a tailored trek plan based on your fitness level.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400">4</div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-100 mb-1">Start Your Adventure</h4>
                                            <p className="text-sm text-slate-400">Finalize booking and hit the trails with Chasing Heights.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Right/Main */}
                        <div className="lg:col-span-8">
                            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
                                <CardHeader className="bg-white border-b border-slate-100 p-8">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <CardTitle className="text-2xl font-bold text-slate-900">Send us a Message</CardTitle>
                                            <CardDescription className="text-slate-500 mt-1">We typically respond within 2-4 hours</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-8 bg-white">
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                    placeholder="Enter your name"
                                                    className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                                    placeholder="Enter your email"
                                                    className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    placeholder="Your phone number"
                                                    className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label className="text-sm font-bold text-slate-700">Inquiry Type</Label>
                                                <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                                                    <SelectTrigger className="h-12 border-slate-200 focus:ring-emerald-500 rounded-xl">
                                                        <SelectValue placeholder="Select purpose" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="booking">New Booking</SelectItem>
                                                        <SelectItem value="existing">Existing Booking</SelectItem>
                                                        <SelectItem value="custom">Custom Tour</SelectItem>
                                                        <SelectItem value="general">General Question</SelectItem>
                                                        <SelectItem value="support">Technical Support</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="text-sm font-bold text-slate-700">Subject</Label>
                                            <Input
                                                id="subject"
                                                type="text"
                                                value={formData.subject}
                                                onChange={(e) => handleInputChange('subject', e.target.value)}
                                                placeholder="What is this about?"
                                                className="h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-sm font-bold text-slate-700">Message</Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => handleInputChange('message', e.target.value)}
                                                placeholder="Tell us about your adventure plans..."
                                                className="min-h-[160px] border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 rounded-xl resize-none p-4"
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-95"
                                        >
                                            {loading ? (
                                                <div className="flex items-center">
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                                    Processing...
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center">
                                                    <Send className="w-5 h-5 mr-3" />
                                                    Send Message
                                                </div>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    )
}
