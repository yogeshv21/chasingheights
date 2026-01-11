export const APP_ROUTES = {
    HOME: '/',
    TREKS: '/treks',
    TREK_DETAIL: (id: string) => `/treks/${id}`,
    LOGIN: '/login',
    SIGNUP: '/signup',
    DASHBOARD: '/dashboard',
    BOOKINGS: '/dashboard/bookings',
    PROFILE: '/dashboard/profile',
    ABOUT: '/about',
    CONTACT: '/contact',
    BLOG: '/blog',
    BLOG_DETAIL: (slug: string) => `/blog/${slug}`,
} as const
