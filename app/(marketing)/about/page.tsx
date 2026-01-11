'use client'

import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
    Shield,
    Award,
    Globe,
    Heart,
    Compass,
    CheckCircle
} from 'lucide-react'
import { ImageWithFallback } from '@/components/shared/ImageWithFallback'
import { APP_ROUTES } from '@/lib/constants/routes'

export default function AboutPage() {
    const values = [
        {
            icon: <Shield className="h-8 w-8 text-emerald-600" />,
            title: "Safety First",
            description: "Your safety is our top priority. We follow strict safety protocols and have emergency procedures in place for every adventure."
        },
        {
            icon: <Award className="h-8 w-8 text-emerald-600" />,
            title: "Expert Guides",
            description: "Our certified local guides have years of experience and deep knowledge of the regions we explore."
        },
        {
            icon: <Heart className="h-8 w-8 text-emerald-600" />,
            title: "Sustainable Tourism",
            description: "We're committed to responsible tourism that benefits local communities and preserves natural environments."
        },
        {
            icon: <Compass className="h-8 w-8 text-emerald-600" />,
            title: "Authentic Experiences",
            description: "We create genuine connections with local cultures and provide authentic, off-the-beaten-path experiences."
        }
    ]

    const stats = [
        { number: "10,000+", label: "Happy Adventurers" },
        { number: "50+", label: "Destinations" },
        { number: "15", label: "Years Experience" },
        { number: "98%", label: "Customer Satisfaction" }
    ]

    const team = [
        {
            name: "Sarah Mitchell",
            role: "Founder & Lead Guide",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=300",
            bio: "Former mountaineer with 20+ years of trekking experience across 6 continents."
        },
        {
            name: "David Chen",
            role: "Operations Director",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
            bio: "Adventure tourism specialist ensuring seamless and safe experiences for all travelers."
        },
        {
            name: "Maya Patel",
            role: "Cultural Liaison",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
            bio: "Anthropologist connecting travelers with authentic local cultures and traditions."
        }
    ]

    const achievements = [
        "ISO 9001:2015 Certified Adventure Tourism Company",
        "Adventure Travel Trade Association Member",
        "Responsible Tourism Certification",
        "UNESCO World Heritage Site Partner",
        "Carbon Neutral Certified Operations",
        "Local Community Development Award Winner"
    ]

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="relative h-96 flex items-center justify-center">
                    <div className="absolute inset-0 z-0">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200"
                            alt="Team of hikers on mountain summit"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>

                    <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Our Adventure Story
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90">
                            Connecting adventurers with the world's most incredible destinations since 2009
                        </p>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Mission Statement */}
                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Mission
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                TrekQuest was founded with a simple yet powerful vision: to make the world's most spectacular
                                destinations accessible to adventurers while preserving their natural beauty and supporting
                                local communities. We believe that travel has the power to transform lives, broaden perspectives,
                                and create lasting memories.
                            </p>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="mb-16">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Values
                            </h2>
                            <p className="text-xl text-gray-600">
                                The principles that guide every adventure we create
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex justify-center mb-4">
                                            {value.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Meet Our Team
                            </h2>
                            <p className="text-xl text-gray-600">
                                Passionate adventurers dedicated to creating unforgettable experiences
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="aspect-square relative">
                                        <ImageWithFallback
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-6 text-center">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-emerald-600 font-medium mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Achievements Section */}
                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Certifications & Awards
                            </h2>
                            <p className="text-xl text-gray-600">
                                Recognition for our commitment to excellence and responsible tourism
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">{achievement}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Story Section */}
                    <section className="mb-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Our Story
                                </h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        TrekQuest began in 2009 when our founder, Sarah Mitchell, returned from a life-changing
                                        trek in the Himalayas. She realized that while the world was full of incredible destinations,
                                        many travelers struggled to find authentic, well-organized adventures that respected both
                                        the environment and local communities.
                                    </p>
                                    <p>
                                        What started as a small operation organizing weekend hikes has grown into a globally
                                        recognized adventure tourism company. We've maintained our commitment to small group
                                        sizes, personalized service, and sustainable practices throughout our growth.
                                    </p>
                                    <p>
                                        Today, we're proud to have helped over 10,000 adventurers discover their own transformative
                                        experiences while contributing to conservation efforts and community development in the
                                        destinations we visit.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600"
                                    alt="Mountain landscape with hikers"
                                    className="w-full rounded-lg shadow-lg"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-lg shadow-lg">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">15+</div>
                                        <div className="text-sm">Years of Adventures</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sustainability Section */}
                    <section className="mb-16">
                        <Card className="bg-emerald-50 border-emerald-200">
                            <CardContent className="p-8">
                                <div className="text-center mb-8">
                                    <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                        Commitment to Sustainability
                                    </h2>
                                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                        We believe in leaving places better than we found them
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="bg-white p-6 rounded-lg shadow-sm">
                                            <h3 className="font-semibold text-gray-900 mb-2">Environmental Protection</h3>
                                            <p className="text-sm text-gray-600">
                                                Carbon-neutral operations, waste reduction programs, and wildlife conservation partnerships
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-white p-6 rounded-lg shadow-sm">
                                            <h3 className="font-semibold text-gray-900 mb-2">Community Support</h3>
                                            <p className="text-sm text-gray-600">
                                                Fair wages for local guides, community development projects, and cultural preservation initiatives
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-white p-6 rounded-lg shadow-sm">
                                            <h3 className="font-semibold text-gray-900 mb-2">Responsible Travel</h3>
                                            <p className="text-sm text-gray-600">
                                                Small group sizes, minimal impact practices, and education about local customs and environment
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* CTA Section */}
                    <section className="text-center">
                        <div className="bg-gray-900 text-white rounded-2xl p-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Start Your Adventure?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join thousands of adventurers who have discovered the world with TrekQuest.
                                Your next unforgettable experience is just a click away.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3"
                                    asChild
                                >
                                    <Link href={APP_ROUTES.TREKS}>Browse Adventures</Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
                                    asChild
                                >
                                    <Link href={APP_ROUTES.CONTACT}>Contact Us</Link>
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}
