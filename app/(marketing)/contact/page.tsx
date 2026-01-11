'use client'

import { useState } from 'react'
import Link from 'next/link'
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
    MapPin,
    Clock,
    Send,
    MessageCircle,
    Globe,
    Headphones,
    Calendar,
    CheckCircle
} from 'lucide-react'
import { APP_ROUTES } from '@/lib/constants/routes'

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
            alert('Please fill in all required fields')
            return
        }

        setLoading(true)

        // Simulate form submission
        setTimeout(() => {
            alert('Message sent successfully! We\'ll get back to you within 24 hours.')
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                inquiryType: ''
            })
            setLoading(false)
        }, 1500)
    }

    const contactMethods = [
        {
            icon: <Mail className="h-6 w-6 text-emerald-600" />,
            title: "Email Us",
            description: "Send us a message anytime",
            details: "hello@trekquest.com",
            action: "Send Email"
        },
        {
            icon: <Phone className="h-6 w-6 text-emerald-600" />,
            title: "Call Us",
            description: "Speak with our adventure experts",
            details: "+1 (555) 123-4567",
            action: "Call Now"
        },
        {
            icon: <MessageCircle className="h-6 w-6 text-emerald-600" />,
            title: "Live Chat",
            description: "Get instant help from our team",
            details: "Available 9 AM - 6 PM PST",
            action: "Start Chat"
        }
    ]

    const officeHours = [
        { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
        { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
        { day: "Sunday", hours: "Closed" },
        { day: "Emergency Support", hours: "24/7 for active travelers" }
    ]

    const faqs = [
        {
            question: "How far in advance should I book?",
            answer: "We recommend booking 2-3 months in advance for popular destinations, especially during peak seasons."
        },
        {
            question: "What's included in the trek price?",
            answer: "All guided treks include professional guides, safety equipment, permits, and group equipment. Meals and accommodation vary by package."
        },
        {
            question: "Do you offer customized private tours?",
            answer: "Yes! We specialize in creating customized adventures for individuals, families, and groups. Contact us for a personalized quote."
        },
        {
            question: "What's your cancellation policy?",
            answer: "Free cancellation up to 48 hours before departure. See our terms and conditions for detailed information."
        }
    ]

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-emerald-600 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                            Have questions about your next adventure? We're here to help you plan the perfect trek.
                        </p>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Contact Methods */}
                    <section className="mb-16">
                        <div className="grid md:grid-cols-3 gap-8">
                            {contactMethods.map((method, index) => (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex justify-center mb-4">
                                            {method.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {method.title}
                                        </h3>
                                        <p className="text-gray-600 mb-2">
                                            {method.description}
                                        </p>
                                        <p className="font-medium text-gray-900 mb-4">
                                            {method.details}
                                        </p>
                                        <Button variant="outline" className="w-full">
                                            {method.action}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Send className="w-5 h-5 mr-2 text-emerald-600" />
                                        Send us a Message
                                    </CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll get back to you within 24 hours
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    placeholder="Your phone number"
                                                />
                                            </div>
                                            <div>
                                                <Label>Inquiry Type</Label>
                                                <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select inquiry type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="booking">New Booking</SelectItem>
                                                        <SelectItem value="existing">Existing Booking</SelectItem>
                                                        <SelectItem value="custom">Custom Tour</SelectItem>
                                                        <SelectItem value="general">General Question</SelectItem>
                                                        <SelectItem value="support">Support</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input
                                                id="subject"
                                                type="text"
                                                value={formData.subject}
                                                onChange={(e) => handleInputChange('subject', e.target.value)}
                                                placeholder="Brief subject of your message"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => handleInputChange('message', e.target.value)}
                                                placeholder="Tell us about your adventure plans, questions, or how we can help..."
                                                rows={6}
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                                        >
                                            {loading ? (
                                                <div className="flex items-center">
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                                    Sending Message...
                                                </div>
                                            ) : (
                                                <>
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar Information */}
                        <div className="space-y-8">
                            {/* Office Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                                        Visit Our Office
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-900">TrekQuest Headquarters</h4>
                                            <p className="text-gray-600">
                                                123 Adventure Lane<br />
                                                Mountain View, CA 94041<br />
                                                United States
                                            </p>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Mail className="w-4 h-4 mr-2" />
                                            <span>hello@trekquest.com</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Phone className="w-4 h-4 mr-2" />
                                            <span>+1 (555) 123-4567</span>
                                        </div>
                                        <Button variant="outline" className="w-full">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            Get Directions
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Office Hours */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                                        Office Hours
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {officeHours.map((schedule, index) => (
                                            <div key={index} className="flex justify-between items-center">
                                                <span className="text-gray-700">{schedule.day}</span>
                                                <span className="text-gray-600 text-sm">{schedule.hours}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                                        <div className="flex items-center text-emerald-700 text-sm">
                                            <Headphones className="w-4 h-4 mr-2" />
                                            <span>24/7 emergency support for active travelers</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Actions */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Quick Actions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                        asChild
                                    >
                                        <Link href={APP_ROUTES.TREKS}>
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Browse Available Treks
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start"
                                        asChild
                                    >
                                        <Link href={APP_ROUTES.DASHBOARD}>
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            Check Existing Booking
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start">
                                        <Globe className="w-4 h-4 mr-2" />
                                        Request Custom Tour
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-xl text-gray-600">
                                Quick answers to common questions
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {faqs.map((faq, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-gray-900 mb-3">
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="mt-16 text-center">
                        <Card className="bg-emerald-50 border-emerald-200">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Ready to Plan Your Adventure?
                                </h2>
                                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                    Don't wait! Our adventure experts are standing by to help you plan the perfect trek.
                                    Whether you're a first-time trekker or seasoned adventurer, we'll customize the perfect experience for you.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                                        <Link href={APP_ROUTES.TREKS}>Browse Adventures</Link>
                                    </Button>
                                    <Button variant="outline">
                                        Schedule a Call
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}
