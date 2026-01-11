// Centralized dummy data for Chasingheights application

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  created_at: string
}

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
  rating: number
  reviews: number
  gallery?: Gallery
  monthlyAvailability?: MonthlyAvailability[]
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  accommodation: string
  meals: string
  altitude: string
  walkingHours?: string
  drivingHours?: string
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

export interface Booking {
  id: string
  user_id: string
  trek_id: string
  participants: number
  start_date: string
  status: 'confirmed' | 'pending' | 'cancelled'
  total_cost: number
  created_at: string
  notes?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  published_date: string
  category: string
  tags: string[]
  reading_time: number
}

// Sample Users
export const DUMMY_USERS: User[] = [
  {
    id: 'user-1',
    email: 'john.doe@example.com',
    name: 'John Doe',
    phone: '+1-555-0123',
    created_at: '2024-01-15T08:00:00Z'
  },
  {
    id: 'user-2',
    email: 'jane.smith@example.com',
    name: 'Jane Smith',
    phone: '+1-555-0456',
    created_at: '2024-02-20T10:30:00Z'
  }
]

// Detailed Trek Data with complete information
export const DUMMY_TREKS: Trek[] = [
  {
    id: 'everest-base-camp',
    title: 'Everest Base Camp Trek',
    location: 'Khumbu, Nepal',
    duration: '14 days',
    difficulty: 'Hard',
    cost: 1299,
    season: 'Spring, Autumn',
    months: ['March', 'April', 'May', 'September', 'October', 'November'],
    description: 'Experience the ultimate adventure to the base of the world\'s highest peak. This challenging trek takes you through stunning Sherpa villages, ancient monasteries, and breathtaking Himalayan landscapes. Walk in the footsteps of legendary mountaineers as you journey through the heart of the Khumbu region.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    availability: 12,
    category: 'upcoming',
    rating: 4.8,
    reviews: 124,
    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800',
        'https://images.unsplash.com/photo-1565556237928-5ecdfa27a01b?w=800',
        'https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=800',
        'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=800',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1551524164-0c96924c8f06?w=800',
        'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800'
      ],
      videos: [
        {
          id: 'ebc-video-1',
          title: 'Everest Base Camp Trek - Complete Journey',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '15:42'
        },
        {
          id: 'ebc-video-2',
          title: 'Sherpa Culture and Mountain Life',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '8:23'
        },
        {
          id: 'ebc-video-3',
          title: 'Kala Patthar Sunrise - Everest View',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '6:15'
        }
      ]
    },
    highlights: [
      'Stand at Everest Base Camp (5,364m)',
      'Breathtaking views from Kala Patthar (5,545m)',
      'Visit Tengboche Monastery',
      'Experience Sherpa culture in Namche Bazaar',
      'Cross thrilling suspension bridges',
      'See Everest, Lhotse, and Nuptse up close'
    ],
    included: [
      'Domestic flights (Kathmandu-Lukla-Kathmandu)',
      'All accommodation during trek',
      'All meals during trek',
      'Experienced English-speaking guide',
      'Porter service (2 trekkers : 1 porter)',
      'All necessary permits and taxes',
      'Medical kit and emergency evacuation',
      'Hotel in Kathmandu (2 nights)'
    ],
    notIncluded: [
      'Travel insurance',
      'Personal expenses (drinks, snacks, souvenirs)',
      'Tips for guides and porters',
      'International flights to/from Kathmandu',
      'Nepal visa fees',
      'Personal trekking equipment (sleeping bag, down jacket)',
      'Additional nights in Kathmandu',
      'Alcoholic beverages and bottled water'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kathmandu',
        description: 'Arrive in Kathmandu and transfer to hotel. Meet your guide and final preparations for the trek.',
        accommodation: 'Hotel',
        meals: 'Dinner',
        altitude: '1,350m'
      },
      {
        day: 2,
        title: 'Fly to Lukla, Trek to Phakding',
        description: 'Early morning flight to Lukla. Begin trek to Phakding through beautiful Sherpa villages.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '2,651m',
        walkingHours: '3-4 hours'
      },
      {
        day: 3,
        title: 'Phakding to Namche Bazaar',
        description: 'Cross several suspension bridges and climb to the famous Sherpa capital of Namche Bazaar.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '3,438m',
        walkingHours: '5-6 hours'
      },
      {
        day: 4,
        title: 'Acclimatization Day in Namche',
        description: 'Rest day for acclimatization. Optional hike to Everest View Hotel for stunning mountain views.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '3,438m',
        walkingHours: '3-4 hours (optional)'
      },
      {
        day: 5,
        title: 'Namche to Tengboche',
        description: 'Trek through beautiful rhododendron forests to reach the famous Tengboche Monastery.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '3,867m',
        walkingHours: '5-6 hours'
      },
      {
        day: 6,
        title: 'Tengboche to Dingboche',
        description: 'Continue through alpine terrain to Dingboche, with incredible mountain views.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '4,410m',
        walkingHours: '5-6 hours'
      },
      {
        day: 7,
        title: 'Acclimatization Day in Dingboche',
        description: 'Another crucial acclimatization day. Optional hike to Nagarjun Hill for panoramic views.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '4,410m',
        walkingHours: '3-4 hours (optional)'
      },
      {
        day: 8,
        title: 'Dingboche to Lobuche',
        description: 'Trek through the memorial area to climbers and continue to Lobuche.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '4,910m',
        walkingHours: '4-5 hours'
      },
      {
        day: 9,
        title: 'Lobuche to EBC and Gorak Shep',
        description: 'The big day! Trek to Everest Base Camp and return to Gorak Shep for the night.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '5,364m (EBC), 5,140m (Gorak Shep)',
        walkingHours: '7-8 hours'
      },
      {
        day: 10,
        title: 'Kala Patthar and Descent to Pheriche',
        description: 'Early morning hike to Kala Patthar for sunrise views, then descend to Pheriche.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '5,545m (Kala Patthar), 4,240m (Pheriche)',
        walkingHours: '6-7 hours'
      },
      {
        day: 11,
        title: 'Pheriche to Namche Bazaar',
        description: 'Long descent back to Namche Bazaar through familiar territory.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '3,438m',
        walkingHours: '6-7 hours'
      },
      {
        day: 12,
        title: 'Namche to Lukla',
        description: 'Final day of trekking, return to Lukla for celebration dinner.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '2,840m',
        walkingHours: '6-7 hours'
      },
      {
        day: 13,
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu. Rest and explore the city.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        altitude: '1,350m'
      },
      {
        day: 14,
        title: 'Final Departure',
        description: 'Transfer to airport for international departure or extend your stay.',
        accommodation: 'Day room if needed',
        meals: 'Breakfast',
        altitude: '1,350m'
      }
    ],
    routeMap: {
      waypoints: [
        { name: 'Lukla', lat: 27.6867, lng: 86.7294, altitude: '2,860m' },
        { name: 'Phakding', lat: 27.7404, lng: 86.7117, altitude: '2,651m' },
        { name: 'Namche Bazaar', lat: 27.8056, lng: 86.7147, altitude: '3,438m' },
        { name: 'Tengboche', lat: 27.8369, lng: 86.7639, altitude: '3,867m' },
        { name: 'Dingboche', lat: 27.8267, lng: 86.8306, altitude: '4,410m' },
        { name: 'Lobuche', lat: 27.9667, lng: 86.7833, altitude: '4,910m' },
        { name: 'Everest Base Camp', lat: 28.0018, lng: 86.8528, altitude: '5,364m' }
      ]
    },
    monthlyAvailability: [
      {
        month: 'March',
        year: 2024,
        dates: [
          { date: '2024-03-05', price: 1299, seatsAvailable: 8, status: 'available' },
          { date: '2024-03-12', price: 1299, seatsAvailable: 6, status: 'available' },
          { date: '2024-03-19', price: 1349, seatsAvailable: 3, status: 'limited' },
          { date: '2024-03-26', price: 1299, seatsAvailable: 10, status: 'available' }
        ]
      },
      {
        month: 'April',
        year: 2024,
        dates: [
          { date: '2024-04-02', price: 1399, seatsAvailable: 2, status: 'limited' },
          { date: '2024-04-09', price: 1399, seatsAvailable: 0, status: 'full' },
          { date: '2024-04-16', price: 1449, seatsAvailable: 5, status: 'available' },
          { date: '2024-04-23', price: 1399, seatsAvailable: 7, status: 'available' },
          { date: '2024-04-30', price: 1399, seatsAvailable: 4, status: 'limited' }
        ]
      },
      {
        month: 'May',
        year: 2024,
        dates: [
          { date: '2024-05-07', price: 1449, seatsAvailable: 9, status: 'available' },
          { date: '2024-05-14', price: 1449, seatsAvailable: 6, status: 'available' },
          { date: '2024-05-21', price: 1499, seatsAvailable: 3, status: 'limited' },
          { date: '2024-05-28', price: 1449, seatsAvailable: 8, status: 'available' }
        ]
      },
      {
        month: 'September',
        year: 2024,
        dates: [
          { date: '2024-09-03', price: 1399, seatsAvailable: 7, status: 'available' },
          { date: '2024-09-10', price: 1399, seatsAvailable: 5, status: 'available' },
          { date: '2024-09-17', price: 1449, seatsAvailable: 2, status: 'limited' },
          { date: '2024-09-24', price: 1399, seatsAvailable: 9, status: 'available' }
        ]
      },
      {
        month: 'October',
        year: 2024,
        dates: [
          { date: '2024-10-01', price: 1449, seatsAvailable: 6, status: 'available' },
          { date: '2024-10-08', price: 1499, seatsAvailable: 1, status: 'limited' },
          { date: '2024-10-15', price: 1549, seatsAvailable: 0, status: 'full' },
          { date: '2024-10-22', price: 1499, seatsAvailable: 4, status: 'limited' },
          { date: '2024-10-29', price: 1449, seatsAvailable: 8, status: 'available' }
        ]
      },
      {
        month: 'November',
        year: 2024,
        dates: [
          { date: '2024-11-05', price: 1349, seatsAvailable: 10, status: 'available' },
          { date: '2024-11-12', price: 1349, seatsAvailable: 7, status: 'available' },
          { date: '2024-11-19', price: 1299, seatsAvailable: 12, status: 'available' },
          { date: '2024-11-26', price: 1299, seatsAvailable: 9, status: 'available' }
        ]
      }
    ]
  },
  {
    id: 'annapurna-circuit',
    title: 'Annapurna Circuit Trek',
    location: 'Annapurna, Nepal',
    duration: '16 days',
    difficulty: 'Moderate',
    cost: 899,
    season: 'Spring, Autumn',
    months: ['March', 'April', 'May', 'October', 'November'],
    description: 'One of the world\'s classic treks featuring diverse landscapes from subtropical forests to high alpine desert. Cross the challenging Thorong La Pass at 5,416m and experience the incredible diversity of Nepal\'s Annapurna region.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    availability: 8,
    category: 'trending',
    rating: 4.6,
    reviews: 89,
    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=800',
        'https://images.unsplash.com/photo-1551046285-76c80338639e?w=800',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800'
      ],
      videos: [
        {
          id: 'annapurna-video-1',
          title: 'Annapurna Circuit - Thorong La Pass',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '12:30'
        },
        {
          id: 'annapurna-video-2',
          title: 'Muktinath Temple and Cultural Heritage',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '7:45'
        }
      ]
    },
    highlights: [
      'Cross Thorong La Pass (5,416m)',
      'Visit sacred Muktinath Temple',
      'Stunning views of Annapurna massif',
      'Experience diverse ecosystems',
      'Traditional Gurung and Thakali culture',
      'Natural hot springs in Tatopani'
    ],
    included: [
      'All ground transportation',
      'Tea house accommodation',
      'All meals during trek',
      'Experienced guide and porter',
      'All permits and fees',
      'First aid kit',
      'Hotel in Kathmandu'
    ],
    notIncluded: [
      'Travel insurance',
      'Personal expenses (drinks, snacks, souvenirs)',
      'Tips for guides and porters',
      'International flights to/from Kathmandu',
      'Nepal visa fees',
      'Personal trekking equipment (sleeping bag, down jacket)',
      'Hot showers and WiFi (available at extra cost)',
      'Alcoholic beverages and bottled water',
      'Emergency evacuation costs'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Drive to Besisahar',
        description: 'Drive from Kathmandu to Besisahar, the starting point of our trek.',
        accommodation: 'Lodge',
        meals: 'All meals',
        altitude: '760m',
        drivingHours: '6-7 hours'
      },
      {
        day: 2,
        title: 'Besisahar to Chame',
        description: 'Begin trekking through terraced fields and rhododendron forests.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '2,710m',
        walkingHours: '6-7 hours'
      },
      {
        day: 3,
        title: 'Chame to Pisang',
        description: 'Trek through pine forests with views of Annapurna II and Pisang Peak.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '3,300m',
        walkingHours: '5-6 hours'
      },
      {
        day: 4,
        title: 'Pisang to Manang',
        description: 'Choose between upper or lower trail to reach the beautiful village of Manang.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '3,519m',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Acclimatization Day in Manang',
        description: 'Rest day for acclimatization. Optional hike to Gangapurna Lake or Ice Lake.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '3,519m',
        walkingHours: '3-5 hours (optional)'
      },
      {
        day: 6,
        title: 'Manang to Yak Kharka',
        description: 'Continue climbing through alpine landscape to Yak Kharka.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '4,018m',
        walkingHours: '3-4 hours'
      },
      {
        day: 7,
        title: 'Yak Kharka to Thorong Phedi',
        description: 'Short but steep climb to Thorong Phedi, base for the pass crossing.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '4,450m',
        walkingHours: '3-4 hours'
      },
      {
        day: 8,
        title: 'Cross Thorong La Pass to Muktinath',
        description: 'Early start to cross the challenging Thorong La Pass and descend to Muktinath.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '5,416m (pass), 3,710m (Muktinath)',
        walkingHours: '7-9 hours'
      },
      {
        day: 9,
        title: 'Muktinath to Jomsom',
        description: 'Visit the sacred Muktinath Temple and descend to the windy town of Jomsom.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '2,743m',
        walkingHours: '5-6 hours'
      },
      {
        day: 10,
        title: 'Jomsom to Marpha',
        description: 'Walk through the Kali Gandaki valley to the beautiful village of Marpha.',
        accommodation: 'Tea House',
        meals: 'All meals',
        altitude: '2,667m',
        walkingHours: '4-5 hours'
      }
    ],
    routeMap: {
      waypoints: [
        { name: 'Besisahar', lat: 28.2333, lng: 84.4167, altitude: '760m' },
        { name: 'Chame', lat: 28.5500, lng: 84.2333, altitude: '2,710m' },
        { name: 'Manang', lat: 28.6667, lng: 84.0167, altitude: '3,519m' },
        { name: 'Thorong La Pass', lat: 28.7833, lng: 83.9333, altitude: '5,416m' },
        { name: 'Muktinath', lat: 28.8167, lng: 83.8667, altitude: '3,710m' },
        { name: 'Jomsom', lat: 28.7833, lng: 83.7333, altitude: '2,743m' }
      ]
    },
    monthlyAvailability: [
      {
        month: 'March',
        year: 2024,
        dates: [
          { date: '2024-03-08', price: 899, seatsAvailable: 6, status: 'available' },
          { date: '2024-03-15', price: 899, seatsAvailable: 4, status: 'limited' },
          { date: '2024-03-22', price: 949, seatsAvailable: 8, status: 'available' },
          { date: '2024-03-29', price: 899, seatsAvailable: 7, status: 'available' }
        ]
      },
      {
        month: 'April',
        year: 2024,
        dates: [
          { date: '2024-04-05', price: 949, seatsAvailable: 5, status: 'available' },
          { date: '2024-04-12', price: 999, seatsAvailable: 2, status: 'limited' },
          { date: '2024-04-19', price: 999, seatsAvailable: 9, status: 'available' },
          { date: '2024-04-26', price: 949, seatsAvailable: 6, status: 'available' }
        ]
      },
      {
        month: 'May',
        year: 2024,
        dates: [
          { date: '2024-05-03', price: 999, seatsAvailable: 3, status: 'limited' },
          { date: '2024-05-10', price: 1049, seatsAvailable: 0, status: 'full' },
          { date: '2024-05-17', price: 1049, seatsAvailable: 7, status: 'available' },
          { date: '2024-05-24', price: 999, seatsAvailable: 8, status: 'available' },
          { date: '2024-05-31', price: 949, seatsAvailable: 10, status: 'available' }
        ]
      },
      {
        month: 'October',
        year: 2024,
        dates: [
          { date: '2024-10-04', price: 999, seatsAvailable: 4, status: 'limited' },
          { date: '2024-10-11', price: 1049, seatsAvailable: 2, status: 'limited' },
          { date: '2024-10-18', price: 1099, seatsAvailable: 6, status: 'available' },
          { date: '2024-10-25', price: 1049, seatsAvailable: 8, status: 'available' }
        ]
      },
      {
        month: 'November',
        year: 2024,
        dates: [
          { date: '2024-11-01', price: 949, seatsAvailable: 9, status: 'available' },
          { date: '2024-11-08', price: 899, seatsAvailable: 12, status: 'available' },
          { date: '2024-11-15', price: 899, seatsAvailable: 10, status: 'available' },
          { date: '2024-11-22', price: 849, seatsAvailable: 15, status: 'available' },
          { date: '2024-11-29', price: 849, seatsAvailable: 11, status: 'available' }
        ]
      }
    ]
  },
  {
    id: 'kilimanjaro-machame',
    title: 'Kilimanjaro - Machame Route',
    location: 'Tanzania, Africa',
    duration: '7 days',
    difficulty: 'Hard',
    cost: 2199,
    season: 'All Year',
    months: ['January', 'February', 'June', 'July', 'August', 'September', 'October'],
    description: 'Climb Africa\'s highest peak via the scenic Machame route. Known as the "Whiskey Route," it offers spectacular views and excellent acclimatization opportunities through diverse climate zones.',
    image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=500',
    availability: 6,
    category: 'seasonal',
    rating: 4.9,
    reviews: 67,
    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=800',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
        'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=800',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=800'
      ],
      videos: [
        {
          id: 'kilimanjaro-video-1',
          title: 'Kilimanjaro Summit - Uhuru Peak Journey',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '18:22'
        },
        {
          id: 'kilimanjaro-video-2',
          title: 'Machame Route - Complete Guide',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '11:15'
        },
        {
          id: 'kilimanjaro-video-3',
          title: 'Wildlife and Landscape of Kilimanjaro',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '9:33'
        }
      ]
    },
    highlights: [
      'Summit Uhuru Peak (5,895m)',
      'Climb the Barranco Wall',
      'See the famous glaciers',
      'Experience 5 climate zones',
      'Stunning sunrise from summit',
      'Wildlife viewing in lower slopes'
    ],
    included: [
      'Airport transfers',
      'All camping equipment',
      'Professional guides and porters',
      'All meals during climb',
      'Park fees and permits',
      'Emergency oxygen',
      'Hotel accommodation (2 nights)'
    ],
    notIncluded: [
      'Travel insurance',
      'Personal expenses (drinks, snacks, souvenirs)',
      'Tips for guides and porters',
      'International flights to/from Tanzania',
      'Tanzania visa fees',
      'Personal climbing equipment (sleeping bag, down jacket)',
      'Additional nights in Moshi/Arusha',
      'Alcoholic beverages and bottled water',
      'Prescription medications',
      'Laundry services'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Machame Gate to Machame Camp',
        description: 'Begin your climb through the rainforest zone to Machame Camp.',
        accommodation: 'Camping',
        meals: 'All meals',
        altitude: '3,010m',
        walkingHours: '5-7 hours'
      },
      {
        day: 2,
        title: 'Machame Camp to Shira Camp',
        description: 'Climb through moorland to reach the Shira Plateau.',
        accommodation: 'Camping',
        meals: 'All meals',
        altitude: '3,850m',
        walkingHours: '4-6 hours'
      },
      {
        day: 3,
        title: 'Shira Camp to Lava Tower to Barranco',
        description: 'Climb high and sleep low for acclimatization, including the famous Barranco Wall.',
        accommodation: 'Camping',
        meals: 'All meals',
        altitude: '4,630m (Lava Tower), 3,950m (Barranco)',
        walkingHours: '6-8 hours'
      },
      {
        day: 4,
        title: 'Barranco to Karanga Camp',
        description: 'Climb the Barranco Wall and continue to Karanga Camp.',
        accommodation: 'Camping',
        meals: 'All meals',
        altitude: '4,035m',
        walkingHours: '4-5 hours'
      },
      {
        day: 5,
        title: 'Karanga to Barafu Camp',
        description: 'Final approach to base camp. Rest and prepare for summit attempt.',
        accommodation: 'Camping',
        meals: 'All meals',
        altitude: '4,640m',
        walkingHours: '4-5 hours'
      },
      {
        day: 6,
        title: 'Summit Day - Uhuru Peak',
        description: 'Midnight start for summit attempt to Uhuru Peak, then descend to Mweka Camp.',
        accommodation: 'Camping',
        meals: 'All meals',
        altitude: '5,895m (summit), 3,090m (Mweka)',
        walkingHours: '10-14 hours'
      },
      {
        day: 7,
        title: 'Mweka Camp to Mweka Gate',
        description: 'Final descent through rainforest to Mweka Gate and transfer back to hotel.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        altitude: '1,630m',
        walkingHours: '3-4 hours'
      }
    ],
    routeMap: {
      waypoints: [
        { name: 'Machame Gate', lat: -3.1667, lng: 37.2167, altitude: '1,640m' },
        { name: 'Machame Camp', lat: -3.1833, lng: 37.2000, altitude: '3,010m' },
        { name: 'Shira Camp', lat: -3.0833, lng: 37.2000, altitude: '3,850m' },
        { name: 'Lava Tower', lat: -3.0667, lng: 37.3167, altitude: '4,630m' },
        { name: 'Barranco Camp', lat: -3.0667, lng: 37.3000, altitude: '3,950m' },
        { name: 'Barafu Camp', lat: -3.0667, lng: 37.3333, altitude: '4,640m' },
        { name: 'Uhuru Peak', lat: -3.0759, lng: 37.3533, altitude: '5,895m' }
      ]
    },
    monthlyAvailability: [
      {
        month: 'January',
        year: 2024,
        dates: [
          { date: '2024-01-08', price: 2199, seatsAvailable: 4, status: 'limited' },
          { date: '2024-01-15', price: 2199, seatsAvailable: 6, status: 'available' },
          { date: '2024-01-22', price: 2299, seatsAvailable: 2, status: 'limited' },
          { date: '2024-01-29', price: 2199, seatsAvailable: 8, status: 'available' }
        ]
      },
      {
        month: 'February',
        year: 2024,
        dates: [
          { date: '2024-02-05', price: 2199, seatsAvailable: 5, status: 'available' },
          { date: '2024-02-12', price: 2249, seatsAvailable: 3, status: 'limited' },
          { date: '2024-02-19', price: 2199, seatsAvailable: 7, status: 'available' },
          { date: '2024-02-26', price: 2199, seatsAvailable: 6, status: 'available' }
        ]
      },
      {
        month: 'June',
        year: 2024,
        dates: [
          { date: '2024-06-03', price: 2299, seatsAvailable: 2, status: 'limited' },
          { date: '2024-06-10', price: 2399, seatsAvailable: 0, status: 'full' },
          { date: '2024-06-17', price: 2399, seatsAvailable: 4, status: 'limited' },
          { date: '2024-06-24', price: 2349, seatsAvailable: 6, status: 'available' }
        ]
      },
      {
        month: 'July',
        year: 2024,
        dates: [
          { date: '2024-07-01', price: 2449, seatsAvailable: 3, status: 'limited' },
          { date: '2024-07-08', price: 2499, seatsAvailable: 1, status: 'limited' },
          { date: '2024-07-15', price: 2499, seatsAvailable: 5, status: 'available' },
          { date: '2024-07-22', price: 2449, seatsAvailable: 7, status: 'available' },
          { date: '2024-07-29', price: 2399, seatsAvailable: 8, status: 'available' }
        ]
      }
    ]
  },
  {
    id: 'mont-blanc-circuit',
    title: 'Tour du Mont Blanc',
    location: 'French Alps',
    duration: '11 days',
    difficulty: 'Moderate',
    cost: 1599,
    season: 'Summer',
    months: ['June', 'July', 'August', 'September'],
    description: 'Walk around Mont Blanc, Western Europe\'s highest peak, through France, Italy, and Switzerland. This classic alpine trek offers stunning mountain scenery, charming alpine villages, and excellent mountain hut accommodation.',
    image: 'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=500',
    availability: 10,
    category: 'trending',
    rating: 4.7,
    reviews: 156,
    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=800',
        'https://images.unsplash.com/photo-1551524164-0c96924c8f06?w=800',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800',
        'https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=800',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
      ],
      videos: [
        {
          id: 'mont-blanc-video-1',
          title: 'Tour du Mont Blanc - Complete Circuit',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '14:30'
        },
        {
          id: 'mont-blanc-video-2',
          title: 'Alpine Huts and Mountain Culture',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '9:45'
        }
      ]
    },
    highlights: [
      'Circle Mont Blanc massif through 3 countries',
      'Stay in traditional alpine huts',
      'Cross high mountain passes',
      'Experience Alpine culture and cuisine',
      'Stunning glacier and peak views',
      'Well-marked trails and facilities'
    ],
    included: [
      'Mountain hut accommodation',
      'Half-board meals in huts',
      'Detailed route maps and GPS tracks',
      'Emergency support and coordination',
      'Local transfers as needed',
      'Professional route guidance',
      'Travel insurance recommendations'
    ],
    notIncluded: [
      'Travel to/from Chamonix',
      'Lunches during trek',
      'Personal hiking equipment',
      'Travel insurance',
      'Drinks and snacks',
      'Optional cable car rides',
      'Tips and personal expenses',
      'Alternative accommodation upgrades'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Chamonix to Les Houches',
        description: 'Begin the classic Tour du Mont Blanc from Chamonix valley.',
        accommodation: 'Mountain Hut',
        meals: 'Half board',
        altitude: '1,000m',
        walkingHours: '4-5 hours'
      },
      {
        day: 2,
        title: 'Les Houches to Les Chapieux',
        description: 'Cross into Italy via the beautiful Seigne Pass.',
        accommodation: 'Mountain Hut',
        meals: 'Half board',
        altitude: '1,549m',
        walkingHours: '6-7 hours'
      },
      {
        day: 3,
        title: 'Les Chapieux to Courmayeur',
        description: 'Descend to the charming Italian town of Courmayeur.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        altitude: '1,224m',
        walkingHours: '5-6 hours'
      },
      {
        day: 4,
        title: 'Courmayeur to Val Ferret',
        description: 'Trek through the beautiful Italian Val Ferret.',
        accommodation: 'Mountain Hut',
        meals: 'Half board',
        altitude: '1,769m',
        walkingHours: '6-7 hours'
      },
      {
        day: 5,
        title: 'Val Ferret to Champex',
        description: 'Cross into Switzerland via Grand Col Ferret.',
        accommodation: 'Hotel',
        meals: 'Half board',
        altitude: '1,466m',
        walkingHours: '5-6 hours'
      },
      {
        day: 6,
        title: 'Champex to Trient',
        description: 'Beautiful walking through Swiss Alpine meadows.',
        accommodation: 'Mountain Hut',
        meals: 'Half board',
        altitude: '1,279m',
        walkingHours: '4-5 hours'
      },
      {
        day: 7,
        title: 'Trient to Argentière',
        description: 'Cross back into France via Balme Col.',
        accommodation: 'Hotel',
        meals: 'Half board',
        altitude: '1,252m',
        walkingHours: '5-6 hours'
      },
      {
        day: 8,
        title: 'Argentière to Chamonix',
        description: 'Final day completing the circuit back to Chamonix.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        altitude: '1,035m',
        walkingHours: '4-5 hours'
      }
    ],
    routeMap: {
      waypoints: [
        { name: 'Chamonix', lat: 45.9237, lng: 6.8694, altitude: '1,035m' },
        { name: 'Les Houches', lat: 45.8936, lng: 6.7969, altitude: '1,000m' },
        { name: 'Les Chapieux', lat: 45.7567, lng: 6.9683, altitude: '1,549m' },
        { name: 'Courmayeur', lat: 45.8167, lng: 6.9667, altitude: '1,224m' },
        { name: 'Champex', lat: 46.0667, lng: 7.1000, altitude: '1,466m' },
        { name: 'Trient', lat: 46.0667, lng: 6.9167, altitude: '1,279m' },
        { name: 'Argentière', lat: 45.9667, lng: 6.9167, altitude: '1,252m' }
      ]
    },
    monthlyAvailability: [
      {
        month: 'June',
        year: 2024,
        dates: [
          { date: '2024-06-10', price: 1599, seatsAvailable: 8, status: 'available' },
          { date: '2024-06-17', price: 1649, seatsAvailable: 5, status: 'available' },
          { date: '2024-06-24', price: 1699, seatsAvailable: 3, status: 'limited' }
        ]
      },
      {
        month: 'July',
        year: 2024,
        dates: [
          { date: '2024-07-01', price: 1749, seatsAvailable: 2, status: 'limited' },
          { date: '2024-07-08', price: 1799, seatsAvailable: 0, status: 'full' },
          { date: '2024-07-15', price: 1799, seatsAvailable: 6, status: 'available' },
          { date: '2024-07-22', price: 1749, seatsAvailable: 9, status: 'available' },
          { date: '2024-07-29', price: 1699, seatsAvailable: 7, status: 'available' }
        ]
      },
      {
        month: 'August',
        year: 2024,
        dates: [
          { date: '2024-08-05', price: 1799, seatsAvailable: 4, status: 'limited' },
          { date: '2024-08-12', price: 1849, seatsAvailable: 1, status: 'limited' },
          { date: '2024-08-19', price: 1799, seatsAvailable: 8, status: 'available' },
          { date: '2024-08-26', price: 1749, seatsAvailable: 10, status: 'available' }
        ]
      },
      {
        month: 'September',
        year: 2024,
        dates: [
          { date: '2024-09-02', price: 1699, seatsAvailable: 12, status: 'available' },
          { date: '2024-09-09', price: 1649, seatsAvailable: 8, status: 'available' },
          { date: '2024-09-16', price: 1599, seatsAvailable: 15, status: 'available' },
          { date: '2024-09-23', price: 1599, seatsAvailable: 11, status: 'available' }
        ]
      }
    ]
  },
  {
    id: 'inca-trail',
    title: 'Classic Inca Trail to Machu Picchu',
    location: 'Cusco, Peru',
    duration: '4 days',
    difficulty: 'Moderate',
    cost: 849,
    season: 'Dry Season',
    months: ['May', 'June', 'July', 'August', 'September'],
    description: 'Follow in the footsteps of the Incas on this ancient trail to the lost city of Machu Picchu. This UNESCO World Heritage trail combines stunning Andean scenery with fascinating archaeological sites.',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500',
    availability: 4,
    category: 'upcoming',
    rating: 4.9,
    reviews: 203,
    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
        'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=800',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'
      ],
      videos: [
        {
          id: 'inca-video-1',
          title: 'Inca Trail to Machu Picchu - Ancient Pathways',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '16:20'
        },
        {
          id: 'inca-video-2',
          title: 'Sunrise at Machu Picchu - Through the Sun Gate',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '8:45'
        },
        {
          id: 'inca-video-3',
          title: 'Inca Ruins and Ancient History',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '12:30'
        }
      ]
    },
    highlights: [
      'Enter Machu Picchu through Sun Gate',
      'Visit ancient Inca ruins along the trail',
      'Cross Dead Woman\'s Pass (4,215m)',
      'Experience cloud forest ecosystems',
      'Learn about Inca history and culture',
      'Limited permits - book well in advance'
    ],
    included: [
      'Professional English-speaking guide',
      'Porter service for camping equipment',
      'All camping equipment and tents',
      'All meals during the trek',
      'Entrance fees to Inca Trail and Machu Picchu',
      'Train ticket Aguas Calientes to Ollantaytambo',
      'Bus transfer Ollantaytambo to Cusco',
      'Emergency oxygen and first aid kit'
    ],
    notIncluded: [
      'International flights to/from Peru',
      'Domestic flights within Peru',
      'Travel insurance (mandatory)',
      'Sleeping bag rental',
      'Personal hiking equipment',
      'Tips for guides and porters',
      'Personal expenses and souvenirs',
      'Additional meals in Cusco',
      'Huayna Picchu mountain climb (optional)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Cusco to Wayllabamba',
        description: 'Start the trek from Qoriwayrachina and hike to the first campsite.',
        accommodation: 'Camping',
        meals: 'All meals',
        altitude: '3,000m',
        walkingHours: '6-7 hours'
      },
      {
        day: 2,
        title: 'Cross Dead Woman\'s Pass',
        description: 'Challenging day crossing the highest pass of the trek.',
        accommodation: 'Camping',
        meals: 'All meals',
        altitude: '4,215m (pass), 3,650m (camp)',
        walkingHours: '7-8 hours'
      },
      {
        day: 3,
        title: 'Explore Inca Ruins',
        description: 'Visit Wiñay Wayna ruins and descend to final campsite.',
        accommodation: 'Camping',
        meals: 'All meals',
        altitude: '2,650m',
        walkingHours: '8-9 hours'
      },
      {
        day: 4,
        title: 'Sunrise at Machu Picchu',
        description: 'Early morning hike through Sun Gate to Machu Picchu for sunrise.',
        accommodation: 'Hotel in Aguas Calientes',
        meals: 'Breakfast',
        altitude: '2,430m',
        walkingHours: '3-4 hours'
      }
    ],
    routeMap: {
      waypoints: [
        { name: 'Qoriwayrachina', lat: -13.2167, lng: -72.5167, altitude: '2,600m' },
        { name: 'Wayllabamba', lat: -13.2000, lng: -72.5333, altitude: '3,000m' },
        { name: 'Dead Woman\'s Pass', lat: -13.1833, lng: -72.5500, altitude: '4,215m' },
        { name: 'Wiñay Wayna', lat: -13.1667, lng: -72.5667, altitude: '2,650m' },
        { name: 'Sun Gate', lat: -13.1633, lng: -72.5450, altitude: '2,720m' },
        { name: 'Machu Picchu', lat: -13.1631, lng: -72.5450, altitude: '2,430m' }
      ]
    },
    monthlyAvailability: [
      {
        month: 'May',
        year: 2024,
        dates: [
          { date: '2024-05-06', price: 849, seatsAvailable: 2, status: 'limited' },
          { date: '2024-05-13', price: 899, seatsAvailable: 0, status: 'full' },
          { date: '2024-05-20', price: 899, seatsAvailable: 3, status: 'limited' },
          { date: '2024-05-27', price: 849, seatsAvailable: 4, status: 'limited' }
        ]
      },
      {
        month: 'June',
        year: 2024,
        dates: [
          { date: '2024-06-03', price: 949, seatsAvailable: 1, status: 'limited' },
          { date: '2024-06-10', price: 999, seatsAvailable: 0, status: 'full' },
          { date: '2024-06-17', price: 999, seatsAvailable: 2, status: 'limited' },
          { date: '2024-06-24', price: 949, seatsAvailable: 3, status: 'limited' }
        ]
      },
      {
        month: 'July',
        year: 2024,
        dates: [
          { date: '2024-07-01', price: 1049, seatsAvailable: 0, status: 'full' },
          { date: '2024-07-08', price: 1099, seatsAvailable: 0, status: 'full' },
          { date: '2024-07-15', price: 1099, seatsAvailable: 1, status: 'limited' },
          { date: '2024-07-22', price: 1049, seatsAvailable: 2, status: 'limited' },
          { date: '2024-07-29', price: 999, seatsAvailable: 3, status: 'limited' }
        ]
      },
      {
        month: 'August',
        year: 2024,
        dates: [
          { date: '2024-08-05', price: 1049, seatsAvailable: 1, status: 'limited' },
          { date: '2024-08-12', price: 1099, seatsAvailable: 0, status: 'full' },
          { date: '2024-08-19', price: 1049, seatsAvailable: 2, status: 'limited' },
          { date: '2024-08-26', price: 999, seatsAvailable: 4, status: 'limited' }
        ]
      },
      {
        month: 'September',
        year: 2024,
        dates: [
          { date: '2024-09-02', price: 949, seatsAvailable: 5, status: 'available' },
          { date: '2024-09-09', price: 899, seatsAvailable: 6, status: 'available' },
          { date: '2024-09-16', price: 849, seatsAvailable: 8, status: 'available' },
          { date: '2024-09-23', price: 849, seatsAvailable: 7, status: 'available' }
        ]
      }
    ]
  },
  {
    id: 'matterhorn-circuit',
    title: 'Matterhorn Circuit Trek',
    location: 'Swiss Alps, Switzerland',
    duration: '10 days',
    difficulty: 'Hard',
    cost: 1899,
    season: 'Summer',
    months: ['July', 'August', 'September'],
    description: 'Circle the iconic Matterhorn through Switzerland and Italy. This challenging trek offers spectacular views of one of the world\'s most famous peaks and pristine alpine environments.',
    image: 'https://images.unsplash.com/photo-1551524164-6cf6ac4fdc57?w=500',
    availability: 8,
    category: 'trending',
    rating: 4.8,
    reviews: 92,
    highlights: [
      'Close-up views of the Matterhorn',
      'High-altitude alpine trails',
      'Traditional Swiss and Italian villages',
      'Challenging mountain passes',
      'Pristine glacier views',
      'Excellent mountain hut system'
    ]
  },
  {
    id: 'patagonia-w-circuit',
    title: 'Patagonia W Circuit',
    location: 'Torres del Paine, Chile',
    duration: '5 days',
    difficulty: 'Moderate',
    cost: 1199,
    season: 'Summer',
    months: ['December', 'January', 'February', 'March'],
    description: 'Explore the dramatic landscapes of Torres del Paine National Park. This trek showcases Patagonia\'s iconic granite towers, glacial lakes, and diverse wildlife.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500',
    availability: 15,
    category: 'seasonal',
    rating: 4.7,
    reviews: 158,
    highlights: [
      'Torres del Paine granite towers',
      'Glacial lakes and waterfalls',
      'Diverse Patagonian wildlife',
      'Dramatic mountain landscapes',
      'Unique geology and ecosystems',
      'World-class photography opportunities'
    ]
  },
  {
    id: 'gokyo-lakes-trek',
    title: 'Gokyo Lakes and Ri Trek',
    location: 'Khumbu, Nepal',
    duration: '12 days',
    difficulty: 'Hard',
    cost: 1149,
    season: 'Spring, Autumn',
    months: ['March', 'April', 'May', 'October', 'November'],
    description: 'Alternative route to Everest region featuring pristine high-altitude lakes and panoramic Himalayan views. Less crowded than EBC with equally spectacular mountain vistas.',
    image: 'https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=500',
    availability: 10,
    category: 'upcoming',
    rating: 4.6,
    reviews: 87,
    highlights: [
      'Turquoise Gokyo Lakes',
      'Gokyo Ri summit (5,357m)',
      'Views of Everest, Lhotse, Makalu, Cho Oyu',
      'Ngozumpa Glacier crossing',
      'Less crowded than EBC',
      'Traditional Sherpa culture'
    ]
  },
  {
    id: 'dolomites-alta-via',
    title: 'Dolomites Alta Via 1',
    location: 'South Tyrol, Italy',
    duration: '8 days',
    difficulty: 'Moderate',
    cost: 1299,
    season: 'Summer',
    months: ['June', 'July', 'August', 'September'],
    description: 'Trek through the UNESCO World Heritage Dolomites on the famous Alta Via 1. Experience dramatic limestone peaks, mountain huts, and Italian alpine culture.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500',
    availability: 12,
    category: 'trending',
    rating: 4.5,
    reviews: 76,
    highlights: [
      'Dramatic Dolomite limestone formations',
      'Mountain hut-to-hut trekking',
      'Italian alpine cuisine',
      'Well-maintained trail system',
      'Via ferrata optional routes',
      'UNESCO World Heritage scenery'
    ]
  },
  {
    id: 'milford-track',
    title: 'Milford Track',
    location: 'Fiordland, New Zealand',
    duration: '4 days',
    difficulty: 'Easy',
    cost: 699,
    season: 'Summer',
    months: ['November', 'December', 'January', 'February', 'March', 'April'],
    description: 'Walk through pristine New Zealand wilderness on this "finest walk in the world." Experience temperate rainforests, waterfalls, and dramatic fjord landscapes.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500',
    availability: 16,
    category: 'seasonal',
    rating: 4.4,
    reviews: 134,
    highlights: [
      'Milford Sound fjord views',
      'Temperate rainforest hiking',
      'Spectacular waterfalls',
      'Unique New Zealand wildlife',
      'Comfortable hut accommodation',
      'All-weather hiking experience'
    ]
  },
  {
    id: 'mont-blanc-summit',
    title: 'Mont Blanc Summit Expedition',
    location: 'Chamonix, France',
    duration: '6 days',
    difficulty: 'Hard',
    cost: 2499,
    season: 'Summer',
    months: ['June', 'July', 'August', 'September'],
    description: 'Climb Western Europe\'s highest peak (4,809m) via the classic Goûter Route. This technical climb requires mountaineering experience and excellent fitness.',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500',
    availability: 6,
    category: 'upcoming',
    rating: 4.9,
    reviews: 45,
    highlights: [
      'Summit of Western Europe (4,809m)',
      'Technical mountaineering skills required',
      'Stunning alpine environment',
      'World-class mountain guiding',
      'Iconic European peak',
      'Challenging but achievable for fit climbers'
    ]
  },
  {
    id: 'gr20-corsica',
    title: 'GR20 Corsica Complete',
    location: 'Corsica, France',
    duration: '15 days',
    difficulty: 'Hard',
    cost: 1749,
    season: 'Summer',
    months: ['June', 'July', 'August', 'September'],
    description: 'Europe\'s toughest long-distance trail through the mountains of Corsica. Challenging terrain, stunning mountain landscapes, and unique Mediterranean alpine environment.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500',
    availability: 8,
    category: 'seasonal',
    rating: 4.6,
    reviews: 67,
    highlights: [
      'Europe\'s most challenging long trail',
      'Dramatic Corsican mountain landscapes',
      'Unique Mediterranean flora and fauna',
      'Technical scrambling sections',
      'Remote mountain refuge stays',
      'Ultimate trekking challenge'
    ]
  },
  {
    id: 'k2-base-camp',
    title: 'K2 Base Camp Trek',
    location: 'Karakoram, Pakistan',
    duration: '18 days',
    difficulty: 'Hard',
    cost: 1899,
    season: 'Summer',
    months: ['June', 'July', 'August', 'September'],
    description: 'Trek to the base of the world\'s second-highest peak through the spectacular Karakoram range. Experience massive glaciers, towering peaks, and Balti culture.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    availability: 12,
    category: 'upcoming',
    rating: 4.8,
    reviews: 89,
    highlights: [
      'Views of K2 (8,611m)',
      'Massive Karakoram glaciers',
      'Concordia - Throne of Mountain Gods',
      'Broad Peak and Gasherbrum views',
      'Traditional Balti culture',
      'Remote wilderness experience'
    ]
  },
  {
    id: 'camino-santiago',
    title: 'Camino de Santiago',
    location: 'Northern Spain',
    duration: '35 days',
    difficulty: 'Easy',
    cost: 899,
    season: 'Spring, Summer, Autumn',
    months: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    description: 'Walk the ancient pilgrimage route across northern Spain. This cultural and spiritual journey combines history, architecture, and beautiful countryside.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500',
    availability: 25,
    category: 'trending',
    rating: 4.3,
    reviews: 287,
    highlights: [
      'Historic pilgrimage route',
      'Rich Spanish culture and history',
      'Medieval towns and architecture',
      'Spiritual and cultural journey',
      'Excellent infrastructure for walkers',
      'UNESCO World Heritage sites'
    ]
  },
  {
    id: 'rwenzori-mountains',
    title: 'Rwenzori Mountains Circuit',
    location: 'Uganda/Congo Border',
    duration: '9 days',
    difficulty: 'Hard',
    cost: 1599,
    season: 'Dry Season',
    months: ['December', 'January', 'February', 'June', 'July', 'August'],
    description: 'Explore Africa\'s "Mountains of the Moon" through unique afro-alpine vegetation zones. This challenging trek features glaciers, high peaks, and diverse ecosystems.',
    image: 'https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=500',
    availability: 8,
    category: 'seasonal',
    rating: 4.5,
    reviews: 56,
    highlights: [
      'Margherita Peak (5,109m)',
      'Equatorial glaciers',
      'Unique afro-alpine vegetation',
      'Giant groundsels and lobelias',
      'Remote African wilderness',
      'Challenging high-altitude hiking'
    ]
  },
  {
    id: 'laugavegur-iceland',
    title: 'Laugavegur Trail Iceland',
    location: 'Highlands, Iceland',
    duration: '4 days',
    difficulty: 'Moderate',
    cost: 999,
    season: 'Summer',
    months: ['June', 'July', 'August', 'September'],
    description: 'Trek through Iceland\'s otherworldly landscapes featuring colorful mountains, geothermal areas, glaciers, and volcanic terrain. One of the world\'s most scenic trails.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500',
    availability: 14,
    category: 'trending',
    rating: 4.7,
    reviews: 145,
    highlights: [
      'Colorful rhyolite mountains',
      'Active geothermal areas',
      'Glacial river crossings',
      'Unique volcanic landscapes',
      'Northern lights possible',
      'Dramatic weather changes'
    ]
  },
  {
    id: 'annapurna-base-camp',
    title: 'Annapurna Base Camp Trek',
    location: 'Annapurna, Nepal',
    duration: '10 days',
    difficulty: 'Moderate',
    cost: 799,
    season: 'Spring, Autumn',
    months: ['March', 'April', 'May', 'October', 'November'],
    description: 'Trek into the heart of the Annapurna Sanctuary surrounded by towering peaks. Experience diverse landscapes from subtropical forests to alpine meadows.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    availability: 18,
    category: 'upcoming',
    rating: 4.4,
    reviews: 167,
    highlights: [
      'Annapurna Base Camp (4,130m)',
      '360-degree mountain views',
      'Diverse ecosystems and cultures',
      'Traditional Gurung villages',
      'Spectacular sunrise views',
      'Natural amphitheater setting'
    ]
  },
  {
    id: 'haute-route',
    title: 'Walker\'s Haute Route',
    location: 'French/Swiss Alps',
    duration: '12 days',
    difficulty: 'Hard',
    cost: 1699,
    season: 'Summer',
    months: ['July', 'August', 'September'],
    description: 'One of the world\'s classic high-level routes from Chamonix to Zermatt. Walk beneath the highest peaks of the Alps with stunning glacier views.',
    image: 'https://images.unsplash.com/photo-1551524164-0c96924c8f06?w=500',
    availability: 9,
    category: 'seasonal',
    rating: 4.8,
    reviews: 112,
    highlights: [
      'Chamonix to Zermatt classic route',
      'Views of Mont Blanc and Matterhorn',
      'High alpine passes and glaciers',
      'Traditional alpine villages',
      'Mountain hut accommodation',
      'World-class mountain scenery'
    ]
  },
  {
    id: 'torres-del-paine-o',
    title: 'Torres del Paine O Circuit',
    location: 'Patagonia, Chile',
    duration: '8 days',
    difficulty: 'Hard',
    cost: 1499,
    season: 'Summer',
    months: ['December', 'January', 'February', 'March'],
    description: 'Complete circuit around Torres del Paine massif including the famous W Trek plus the remote backside. Experience Patagonia\'s most dramatic landscapes.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500',
    availability: 7,
    category: 'seasonal',
    rating: 4.6,
    reviews: 89,
    highlights: [
      'Complete Torres del Paine circuit',
      'Remote backside wilderness',
      'Glacier Grey and icebergs',
      'Diverse Patagonian wildlife',
      'Challenging weather conditions',
      'Ultimate Patagonia experience'
    ]
  },
  {
    id: 'langtang-valley',
    title: 'Langtang Valley Trek',
    location: 'Langtang, Nepal',
    duration: '7 days',
    difficulty: 'Moderate',
    cost: 649,
    season: 'Spring, Autumn',
    months: ['March', 'April', 'May', 'October', 'November'],
    description: 'Beautiful valley trek north of Kathmandu with mountain views, Tamang culture, and rhododendron forests. Often called the "Valley of Glaciers."',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    availability: 20,
    category: 'upcoming',
    rating: 4.3,
    reviews: 156,
    highlights: [
      'Beautiful Langtang Valley',
      'Tamang culture and villages',
      'Langtang Lirung views',
      'Rhododendron forests',
      'Kyanjin Gompa monastery',
      'Close to Kathmandu'
    ]
  }
]

// Helper functions
export const mockDelay = (ms: number = 1000): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const getTrekById = (id: string): Trek | undefined => {
  return DUMMY_TREKS.find(trek => trek.id === id)
}

export const searchTreks = (query: string): Trek[] => {
  const lowercaseQuery = query.toLowerCase()
  return DUMMY_TREKS.filter(trek =>
    trek.title.toLowerCase().includes(lowercaseQuery) ||
    trek.location.toLowerCase().includes(lowercaseQuery) ||
    trek.description.toLowerCase().includes(lowercaseQuery) ||
    trek.difficulty.toLowerCase().includes(lowercaseQuery) ||
    trek.category.toLowerCase().includes(lowercaseQuery)
  )
}

export const getBlogById = (id: string): BlogPost | undefined => {
  return DUMMY_BLOGS.find(blog => blog.id === id || blog.slug === id)
}

export const getUserById = (id: string): User | undefined => {
  return DUMMY_USERS.find(user => user.id === id)
}

export const searchBlogs = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase()
  return DUMMY_BLOGS.filter(blog =>
    blog.title.toLowerCase().includes(lowercaseQuery) ||
    blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
    blog.content.toLowerCase().includes(lowercaseQuery) ||
    blog.category.toLowerCase().includes(lowercaseQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

export const getTreksByCategory = (category: string): Trek[] => {
  return DUMMY_TREKS.filter(trek => trek.category === category)
}

export const getQuickTrekSuggestions = (query: string = '', limit: number = 6): Trek[] => {
  // Return a mix of highly rated and popular treks, filtered by query if provided
  let treks = DUMMY_TREKS;

  if (query) {
    const lowercaseQuery = query.toLowerCase();
    treks = treks.filter(trek =>
      trek.title.toLowerCase().includes(lowercaseQuery) ||
      trek.location.toLowerCase().includes(lowercaseQuery)
    );
  }

  return treks
    .sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews))
    .slice(0, limit)
}

export const getBookingsByUserId = (userId: string): Booking[] => {
  return DUMMY_BOOKINGS.filter(booking => booking.user_id === userId)
}

// Sample Bookings
export const DUMMY_BOOKINGS: Booking[] = [
  {
    id: 'booking-1',
    user_id: 'user-1',
    trek_id: 'everest-base-camp',
    participants: 2,
    start_date: '2024-04-15',
    status: 'confirmed',
    total_cost: 2598,
    created_at: '2024-01-20T14:30:00Z',
    notes: 'Celebrating 10th anniversary'
  },
  {
    id: 'booking-2',
    user_id: 'user-1',
    trek_id: 'annapurna-circuit',
    participants: 1,
    start_date: '2024-10-10',
    status: 'pending',
    total_cost: 899,
    created_at: '2024-02-14T09:15:00Z'
  },
  {
    id: 'booking-3',
    user_id: 'user-2',
    trek_id: 'kilimanjaro-machame',
    participants: 1,
    start_date: '2024-08-20',
    status: 'confirmed',
    total_cost: 2199,
    created_at: '2024-02-28T16:45:00Z'
  }
]

// Blog Posts (Complete collection)
export const DUMMY_BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Essential Gear for High-Altitude Trekking',
    slug: 'essential-gear-high-altitude-trekking',
    excerpt: 'Discover the must-have equipment and gear for successful high-altitude adventures. From proper layering systems to specialized equipment, learn what you need for treks above 4,000 meters.',
    content: 'High-altitude trekking presents unique challenges that require specialized gear and careful preparation. As you ascend above 4,000 meters, the environment becomes increasingly harsh, with lower oxygen levels, extreme temperature variations, and unpredictable weather conditions...',
    image: 'https://images.unsplash.com/photo-1596055746427-d5f61aa5df99?w=800',
    author: 'Sarah Mountain',
    published_date: '2024-03-15T10:00:00Z',
    category: 'Gear Guide',
    tags: ['gear', 'high-altitude', 'equipment', 'safety'],
    reading_time: 8
  },
  {
    id: 'blog-2',
    title: 'Preparing for Your First Himalayan Trek',
    slug: 'preparing-first-himalayan-trek',
    excerpt: 'Everything you need to know before embarking on your first Himalayan adventure. From physical preparation to cultural insights, this comprehensive guide covers all the essentials.',
    content: 'The Himalayas offer some of the world\'s most spectacular trekking experiences, but proper preparation is essential for a safe and enjoyable journey...',
    image: 'https://images.unsplash.com/photo-1686553749776-96e22b5e5827?w=800',
    author: 'David Sherpa',
    published_date: '2024-03-10T14:30:00Z',
    category: 'Preparation',
    tags: ['himalayas', 'preparation', 'first-time', 'training'],
    reading_time: 12
  },
  {
    id: 'blog-3',
    title: 'Best Trekking Seasons Around the World',
    slug: 'best-trekking-seasons-worldwide',
    excerpt: 'Plan your trekking adventures with this comprehensive guide to the best seasons for popular trekking destinations worldwide. From monsoons to snow seasons, timing is everything.',
    content: 'Timing can make or break your trekking experience. Understanding seasonal patterns, weather conditions, and local factors is crucial for planning successful adventures worldwide...',
    image: 'https://images.unsplash.com/photo-1551046285-76c80338639e?w=800',
    author: 'Maria Rodriguez',
    published_date: '2024-03-05T09:15:00Z',
    category: 'Planning',
    tags: ['seasons', 'planning', 'weather', 'worldwide'],
    reading_time: 10
  },
  {
    id: 'blog-4',
    title: 'Complete Guide to Trekking Nutrition',
    slug: 'complete-guide-trekking-nutrition',
    excerpt: 'Fuel your adventures with proper nutrition. Learn about caloric needs, meal planning, and the best foods to pack for multi-day treks in remote locations.',
    content: 'Proper nutrition is the fuel that powers your trekking adventures. Understanding your body\'s needs and planning accordingly can mean the difference between a successful trek and an energy-depleted struggle...',
    image: 'https://images.unsplash.com/photo-1651956126405-be7497203015?w=800',
    author: 'Dr. James Nutrition',
    published_date: '2024-02-28T11:20:00Z',
    category: 'Nutrition',
    tags: ['nutrition', 'food', 'energy', 'health'],
    reading_time: 9
  },
  {
    id: 'blog-5',
    title: 'Navigation Skills Every Trekker Should Know',
    slug: 'navigation-skills-every-trekker',
    excerpt: 'Master essential navigation techniques for safe wilderness travel. From reading topographic maps to using GPS devices, build confidence in route-finding skills.',
    content: 'Navigation skills are among the most critical safety skills for any trekker. Whether you\'re following well-marked trails or venturing into remote wilderness areas, understanding how to navigate confidently can save your life...',
    image: 'https://images.unsplash.com/photo-1504807959081-3dafd3871909?w=800',
    author: 'Mike Trailblazer',
    published_date: '2024-02-25T15:45:00Z',
    category: 'Skills',
    tags: ['navigation', 'safety', 'compass', 'gps'],
    reading_time: 11
  },
  {
    id: 'blog-6',
    title: 'Choosing the Right Trekking Backpack',
    slug: 'choosing-right-trekking-backpack',
    excerpt: 'Find the perfect backpack for your adventures. This comprehensive guide covers capacity, fit, features, and recommendations for different types of trekking.',
    content: 'Your backpack is your most important piece of trekking equipment after your boots. A well-fitted, properly sized pack can make the difference between a comfortable journey and a painful ordeal...',
    image: 'https://images.unsplash.com/photo-1622260614153-03223fb72052?w=800',
    author: 'Lisa Gear',
    published_date: '2024-02-20T08:30:00Z',
    category: 'Gear Guide',
    tags: ['backpack', 'equipment', 'gear', 'comfort'],
    reading_time: 13
  },
  {
    id: 'blog-7',
    title: 'Mental Preparation for Challenging Treks',
    slug: 'mental-preparation-challenging-treks',
    excerpt: 'Build the mental resilience needed for demanding adventures. Learn psychological techniques and mindset strategies that help you overcome obstacles and enjoy your journey.',
    content: 'Physical fitness gets most of the attention in trek preparation, but mental readiness is equally important for challenging adventures. This guide explores psychological preparation techniques...',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    author: 'Dr. Emma Mind',
    published_date: '2024-02-15T16:20:00Z',
    category: 'Preparation',
    tags: ['mental-health', 'psychology', 'mindset', 'resilience'],
    reading_time: 14
  },
  {
    id: 'blog-8',
    title: 'Altitude Sickness: Prevention and Treatment',
    slug: 'altitude-sickness-prevention-treatment',
    excerpt: 'Understand altitude sickness symptoms, prevention strategies, and treatment options. Essential knowledge for anyone planning high-altitude adventures above 3,000 meters.',
    content: 'Altitude sickness affects many trekkers venturing above 3,000 meters. Understanding the symptoms, prevention methods, and proper treatment can make the difference between a successful summit and a dangerous situation...',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    author: 'Dr. Sarah Alpine',
    published_date: '2024-02-10T12:45:00Z',
    category: 'Health',
    tags: ['altitude', 'health', 'safety', 'medicine'],
    reading_time: 15
  }
]