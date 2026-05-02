import { 
  Trek, 
  ItineraryDay, 
  Gallery, 
  GalleryVideo, 
  RouteMap, 
  Waypoint 
} from '@/types/trek'

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  created_at: string
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
    cost: 75000,
    season: 'Spring, Autumn',
    months: ['March', 'April', 'May', 'September', 'October', 'November'],
    description: 'Experience the ultimate adventure to the base of the world\'s highest peak. This challenging trek takes you through stunning Sherpa villages, ancient monasteries, and breathtaking Himalayan landscapes. Walk in the footsteps of legendary mountaineers as you journey through the heart of the Khumbu region.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    availability: 12,
    category: 'upcoming',
    basecamp: 'Everest Base Camp',
    highestAltitude: '18,513 ft',
    totalDistance: '130 km',
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
      'Reach Everest Base Camp (5,364m) – the legendary basecamp',
      'Summit Kala Patthar (5,545m) for the best Everest close-up',
      'Fly into Lukla, one of the world\'s most dramatic airstrips',
      'Visit the 400-year-old Tengboche Monastery',
      'Experience authentic Sherpa culture in Namche Bazaar',
      'Witness four 8,000m+ peaks: Everest, Lhotse, Makalu, Cho Oyu'
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
        distance: '1,350m',
        duration: ""
      },
      {
        day: 2,
        title: 'Fly to Lukla, Trek to Phakding',
        description: 'Early morning flight to Lukla. Begin trek to Phakding through beautiful Sherpa villages.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '2,651m',
        duration: '3-4 hours'
      },
      {
        day: 3,
        title: 'Phakding to Namche Bazaar',
        description: 'Cross several suspension bridges and climb to the famous Sherpa capital of Namche Bazaar.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '3,438m',
        duration: '5-6 hours'
      },
      {
        day: 4,
        title: 'Acclimatization Day in Namche',
        description: 'Rest day for acclimatization. Optional hike to Everest View Hotel for stunning mountain views.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '3,438m',
        duration: '3-4 hours (optional)'
      },
      {
        day: 5,
        title: 'Namche to Tengboche',
        description: 'Trek through beautiful rhododendron forests to reach the famous Tengboche Monastery.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '3,867m',
        duration: '5-6 hours'
      },
      {
        day: 6,
        title: 'Tengboche to Dingboche',
        description: 'Continue through alpine terrain to Dingboche, with incredible mountain views.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '4,410m',
        duration: '5-6 hours'
      },
      {
        day: 7,
        title: 'Acclimatization Day in Dingboche',
        description: 'Another crucial acclimatization day. Optional hike to Nagarjun Hill for panoramic views.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '4,410m',
        duration: '3-4 hours (optional)'
      },
      {
        day: 8,
        title: 'Dingboche to Lobuche',
        description: 'Trek through the memorial area to climbers and continue to Lobuche.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '4,910m',
        duration: '4-5 hours'
      },
      {
        day: 9,
        title: 'Lobuche to EBC and Gorak Shep',
        description: 'The big day! Trek to Everest Base Camp and return to Gorak Shep for the night.',
        accommodation: 'Tea House',
        meals: 'All meals',
        duration: '7-8 hours'
      },
      {
        day: 10,
        title: 'Kala Patthar and Descent to Pheriche',
        description: 'Early morning hike to Kala Patthar for sunrise views, then descend to Pheriche.',
        accommodation: 'Tea House',
        meals: 'All meals',
        duration: '6-7 hours'
      },
      {
        day: 11,
        title: 'Pheriche to Namche Bazaar',
        description: 'Long descent back to Namche Bazaar through familiar territory.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '3,438m',
        duration: '6-7 hours'
      },
      {
        day: 12,
        title: 'Namche to Lukla',
        description: 'Final day of trekking, return to Lukla for celebration dinner.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '2,840m',
        duration: '6-7 hours'
      },
      {
        day: 13,
        title: 'Fly to Kathmandu',
        description: 'Morning flight back to Kathmandu. Rest and explore the city.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        distance: '1,350m',
        duration: ""
      },
      {
        day: 14,
        title: 'Final Departure',
        description: 'Transfer to airport for international departure or extend your stay.',
        accommodation: 'Day room if needed',
        meals: 'Breakfast',
        distance: '1,350m',
        duration: ""
      }
    ],
  },
  {
    id: 'annapurna-circuit',
    title: 'Annapurna Circuit Trek',
    location: 'Annapurna, Nepal',
    duration: '16 days',
    difficulty: 'Moderate',
    cost: 55000,
    season: 'Spring, Autumn',
    months: ['March', 'April', 'May', 'October', 'November'],
    description: 'The  Annapurna Circuit is a trek within the mountain ranges of central Nepal. The total length of the route varies between 160 and 230 km, depending on where motor transportation is used and where the trek is ended. This trek crosses two different river valleys and encircles the Annapurna Massif. The path reaches its highest point at Thorung La pass, reaching the edge of the Tibetan Plateau. Most trekkers hike the route anticlockwise, as this way the daily altitude gain is slower, and crossing the high Thorong La pass is easier and safer.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    availability: 8,
    category: 'trending',
    basecamp: 'Thorong Phedi',
    highestAltitude: '17,769 ft',
    totalDistance: '210 km',
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
      'Cross Thorong La Pass (5,416m), one of the world\'s highest trekking passes',
      'Visit the sacred Muktinath Temple, revered by Hindus and Buddhists',
      'Walk through the Kali Gandaki Gorge, the world\'s deepest valley',
      'Soak in the natural hot springs at Tatopani',
      'See Annapurna I–IV, Gangapurna, and Dhaulagiri',
      'Experience diverse ecosystems: subtropical to Tibetan high desert'
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
        distance: '760m',
        duration: ""
      },
      {
        day: 2,
        title: 'Besisahar to Chame',
        description: 'Begin trekking through terraced fields and rhododendron forests.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '2,710m',
        duration: '6-7 hours'
      },
      {
        day: 3,
        title: 'Chame to Pisang',
        description: 'Trek through pine forests with views of Annapurna II and Pisang Peak.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '3,300m',
        duration: '5-6 hours'
      },
      {
        day: 4,
        title: 'Pisang to Manang',
        description: 'Choose between upper or lower trail to reach the beautiful village of Manang.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '3,519m',
        duration: '6-7 hours'
      },
      {
        day: 5,
        title: 'Acclimatization Day in Manang',
        description: 'Rest day for acclimatization. Optional hike to Gangapurna Lake or Ice Lake.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '3,519m',
        duration: '3-5 hours (optional)'
      },
      {
        day: 6,
        title: 'Manang to Yak Kharka',
        description: 'Continue climbing through alpine landscape to Yak Kharka.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '4,018m',
        duration: '3-4 hours'
      },
      {
        day: 7,
        title: 'Yak Kharka to Thorong Phedi',
        description: 'Short but steep climb to Thorong Phedi, base for the pass crossing.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '4,450m',
        duration: '3-4 hours'
      },
      {
        day: 8,
        title: 'Cross Thorong La Pass to Muktinath',
        description: 'Early start to cross the challenging Thorong La Pass and descend to Muktinath.',
        accommodation: 'Tea House',
        meals: 'All meals',
        duration: '7-9 hours'
      },
      {
        day: 9,
        title: 'Muktinath to Jomsom',
        description: 'Visit the sacred Muktinath Temple and descend to the windy town of Jomsom.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '2,743m',
        duration: '5-6 hours'
      },
      {
        day: 10,
        title: 'Jomsom to Marpha',
        description: 'Walk through the Kali Gandaki valley to the beautiful village of Marpha.',
        accommodation: 'Tea House',
        meals: 'All meals',
        distance: '2,667m',
        duration: '4-5 hours'
      }
    ],
  },
  {
    id: 'kilimanjaro-machame',
    title: 'Kilimanjaro - Machame Route',
    location: 'Tanzania, Africa',
    duration: '7 days',
    difficulty: 'Hard',
    cost: 180000,
    season: 'All Year',
    months: ['January', 'February', 'June', 'July', 'August', 'September', 'October'],
    description: 'Climb Africa\'s highest peak via the scenic Machame route. Known as the "Whiskey Route," it offers spectacular views and excellent acclimatization opportunities through diverse climate zones.',
    image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=500',
    availability: 6,
    category: 'seasonal',
    basecamp: 'Barafu Camp',
    highestAltitude: '19,341 ft',
    totalDistance: '62 km',
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
      'Summit Uhuru Peak (5,895m), the Roof of Africa',
      'Climb the iconic Barranco Wall at 3,950m',
      'Pass through 5 distinct climate zones in 7 days',
      'See the famous glaciers and ice fields of Kilimanjaro',
      'Experience a breathtaking sunrise above the clouds',
      'Wildlife sightings in the montane forest zone'
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
        distance: '3,010m',
        duration: '5-7 hours'
      },
      {
        day: 2,
        title: 'Machame Camp to Shira Camp',
        description: 'Climb through moorland to reach the Shira Plateau.',
        accommodation: 'Camping',
        meals: 'All meals',
        distance: '3,850m',
        duration: '4-6 hours'
      },
      {
        day: 3,
        title: 'Shira Camp to Lava Tower to Barranco',
        description: 'Climb high and sleep low for acclimatization, including the famous Barranco Wall.',
        accommodation: 'Camping',
        meals: 'All meals',
        duration: '6-8 hours'
      },
      {
        day: 4,
        title: 'Barranco to Karanga Camp',
        description: 'Climb the Barranco Wall and continue to Karanga Camp.',
        accommodation: 'Camping',
        meals: 'All meals',
        distance: '4,035m',
        duration: '4-5 hours'
      },
      {
        day: 5,
        title: 'Karanga to Barafu Camp',
        description: 'Final approach to base camp. Rest and prepare for summit attempt.',
        accommodation: 'Camping',
        meals: 'All meals',
        distance: '4,640m',
        duration: '4-5 hours'
      },
      {
        day: 6,
        title: 'Summit Day - Uhuru Peak',
        description: 'Midnight start for summit attempt to Uhuru Peak, then descend to Mweka Camp.',
        accommodation: 'Camping',
        meals: 'All meals',
        duration: '10-14 hours'
      },
      {
        day: 7,
        title: 'Mweka Camp to Mweka Gate',
        description: 'Final descent through rainforest to Mweka Gate and transfer back to hotel.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        distance: '1,630m',
        duration: '3-4 hours'
      }
    ],
  },
  {
    id: 'mont-blanc-circuit',
    title: 'Tour du Mont Blanc',
    location: 'French Alps',
    duration: '11 days',
    difficulty: 'Moderate',
    cost: 140000,
    season: 'Summer',
    months: ['June', 'July', 'August', 'September'],
    description: 'The Tour du Mont Blanc or TMB is one of the most popular long-distance walks in Europe. It circles the Mont Blanc massif, covering a distance of roughly 165 kilometres (103 mi) with 10 kilometres (6.2 mi) of ascent/descent and passing through parts of Switzerland, Italy and France.',
    image: 'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=500',
    availability: 10,
    category: 'trending',
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
      'Circle Mont Blanc through France, Italy and Switzerland',
      'Stay in traditional Alpine mountain huts (refuges)',
      'Cross multiple high mountain passes above 2,500m',
      'Stunning views of the Mont Blanc massif (4,808m)',
      'Charming Alpine villages: Courmayeur, Champex, Chamonix',
      'Well-marked trails with excellent waymarking throughout'
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
        distance: '1,000m',
        duration: '4-5 hours'
      },
      {
        day: 2,
        title: 'Les Houches to Les Chapieux',
        description: 'Cross into Italy via the beautiful Seigne Pass.',
        accommodation: 'Mountain Hut',
        meals: 'Half board',
        distance: '1,549m',
        duration: '6-7 hours'
      },
      {
        day: 3,
        title: 'Les Chapieux to Courmayeur',
        description: 'Descend to the charming Italian town of Courmayeur.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        distance: '1,224m',
        duration: '5-6 hours'
      },
      {
        day: 4,
        title: 'Courmayeur to Val Ferret',
        description: 'Trek through the beautiful Italian Val Ferret.',
        accommodation: 'Mountain Hut',
        meals: 'Half board',
        distance: '1,769m',
        duration: '6-7 hours'
      },
      {
        day: 5,
        title: 'Val Ferret to Champex',
        description: 'Cross into Switzerland via Grand Col Ferret.',
        accommodation: 'Hotel',
        meals: 'Half board',
        distance: '1,466m',
        duration: '5-6 hours'
      },
      {
        day: 6,
        title: 'Champex to Trient',
        description: 'Beautiful walking through Swiss Alpine meadows.',
        accommodation: 'Mountain Hut',
        meals: 'Half board',
        distance: '1,279m',
        duration: '4-5 hours'
      },
      {
        day: 7,
        title: 'Trient to Argentière',
        description: 'Cross back into France via Balme Col.',
        accommodation: 'Hotel',
        meals: 'Half board',
        distance: '1,252m',
        duration: '5-6 hours'
      },
      {
        day: 8,
        title: 'Argentière to Chamonix',
        description: 'Final day completing the circuit back to Chamonix.',
        accommodation: 'Hotel',
        meals: 'Breakfast',
        distance: '1,035m',
        duration: '4-5 hours'
      }
    ],
  },
  {
    id: 'inca-trail',
    title: 'Classic Inca Trail to Machu Picchu',
    location: 'Cusco, Peru',
    duration: '4 days',
    difficulty: 'Moderate',
    cost: 90000,
    season: 'Dry Season',
    months: ['May', 'June', 'July', 'August', 'September'],
    description: 'The Inca Trail to Machu Picchu is a hiking trail in Peru that terminates at Machu Picchu. It consists of three overlapping trails: Mollepata, Classic, and One Day. Mollepata is the longest of the three routes with the highest mountain pass and intersects with the Classic route before crossing Warmiwañusqa. Located in the Andes mountain range, the trail passes through several types of Andean environments including cloud forest and alpine tundra. Settlements, tunnels, and many Incan ruins are located along the trail before ending the terminus at the Sun Gate on Machu Picchu mountain. The two lon',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500',
    availability: 4,
    category: 'upcoming',
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
      'Enter Machu Picchu through the iconic Sun Gate at sunrise',
      'Walk the ancient Inca-paved stone trail through cloud forest',
      'Cross Dead Woman\'s Pass (4,215m), the highest point',
      'Visit Inca ruins: Runkurakay, Sayacmarca, Wiñay Wayna',
      'Limited permits – a truly exclusive experience',
      'Experience diverse ecosystems from high Andes to cloud forest'
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
        distance: '3,000m',
        duration: '6-7 hours'
      },
      {
        day: 2,
        title: 'Cross Dead Woman\'s Pass',
        description: 'Challenging day crossing the highest pass of the trek.',
        accommodation: 'Camping',
        meals: 'All meals',
        altitude: '4,215m (pass), 3,650m (camp)',
        duration: '7-8 hours'
      },
      {
        day: 3,
        title: 'Explore Inca Ruins',
        description: 'Visit Wiñay Wayna ruins and descend to final campsite.',
        accommodation: 'Camping',
        meals: 'All meals',
        distance: '2,650m',
        duration: '8-9 hours'
      },
      {
        day: 4,
        title: 'Sunrise at Machu Picchu',
        description: 'Early morning hike through Sun Gate to Machu Picchu for sunrise.',
        accommodation: 'Hotel in Aguas Calientes',
        meals: 'Breakfast',
        distance: '2,430m',
        duration: '3-4 hours'
      }
    ],
  },
  {
    id: 'kedarkantha-trek',
    title: 'Kedarkantha Trek',
    location: 'Uttarkashi, Uttarakhand, India',
    duration: '5 days',
    difficulty: 'Easy',
    cost: 8000,
    season: 'Winter, Spring',
    months: [
      'December',
      'January',
      'February',
      'March',
      'April'
    ],
    description: 'Kedarkantha is a mountain peak of the Himalayas in Uttarakhand, India. Its elevation is 12,500 ft (3,800 m). Kedarkantha is located within Govind Wildlife Sanctuary in Uttarkashi district.',
    image: 'https://images.unsplash.com/photo-1549887534-3ec93abae1b6?w=500',
    availability: 20,
    category: 'popular',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1549887534-3ec93abae1b6?w=800',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
      ],
      videos: [
        {
          id: 'kedar-1',
          title: 'Kedarkantha Snow Trek Experience',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '10:20'
        }
      ]
    },

    highlights: [
      'Summit Kedarkantha (3,810m) for 360° panoramic views',
      'Camp beside the frozen Juda-ka-Taal lake in winter',
      'Trek through dense snow-laden pine and oak forests',
      'See Swargarohini, Bandarpoonch, and Black Peak summits',
      'Ideal beginner winter trek with manageable altitude',
      'Spectacular Himalayan sunrise from the summit ridge'
    ],

    included: [
      'Accommodation in camps',
      'All meals during trek',
      'Guide and support staff',
      'Permits and entry fees'
    ],

    notIncluded: [
      'Transport to Sankri',
      'Personal expenses',
      'Trekking gear',
      'Insurance'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Sankri',
        description: 'Drive through scenic mountain roads to Sankri village.',
        accommodation: 'Guesthouse',
        meals: 'Dinner',
        distance: '1,950m',
        duration: ""
      },
      {
        day: 2,
        title: 'Sankri to Juda Ka Talab',
        description: 'Trek through pine forests to reach campsite.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '2,700m',
        duration: '5 hours'
      },
      {
        day: 3,
        title: 'Juda Ka Talab to Base Camp',
        description: 'Gradual ascent with snow trails.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '3,100m',
        duration: '4 hours'
      },
      {
        day: 4,
        title: 'Summit & back',
        description: 'Early morning summit climb and descent.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '3,800m',
        duration: '7 hours'
      }
    ],
    bestTime: {
      title: "Best Time to do the Kedarkantha Trek",
      subtitle: "Time your trek well",
      description: "Kedarkantha trek is one of the few treks in the Indian Himalayas where you can trek for the most part of the year. Kedarkantha trek is accessible for 10 months of the year except for July and August (the peak rainy months in Uttarakhand).",
      seasons: [
        { name: "Winter", months: "December to February" },
        { name: "Spring", months: "March and April" },
        { name: "Summer", months: "May and June" },
        { name: "Autumn", months: "Mid September to November" }
      ],
      conclusion: "Each of these seasons has something very different to offer in terms of terrain, difficulty and weather."
    },
    difficultyDetail: {
      title: "How Difficult is the Kedarkantha Trek",
      subtitle: "What to Expect in terms of Terrain, Altitude, Weather and Safety",
      description: "Kedarkantha is considered an easy-to-moderate trek, making it ideal for beginners and experienced trekkers alike. However, trekking in winter adds a layer of challenge due to snow.",
      items: [
        { title: "Terrain", content: "The trail passes through beautiful pine forests and open meadows. In winter, the path is completely covered in snow, requiring good trekking shoes and sometimes microspikes." },
        { title: "Altitude", content: "Reaching a maximum altitude of 12,500 ft, climbers must be aware of AMS (Acute Mountain Sickness). Proper hydration and a steady pace are key." },
        { title: "Weather", content: "Temperatures can drop to -10°C at night during peak winter (Dec-Jan). Layering is essential to stay warm and safe." },
        { title: "Safety", content: "The trails are well-marked and usually populated, but having an expert guide is mandatory for safe navigation, especially during heavy snowfall." }
      ]
    },
  },
  {
    id: 'hamta-pass-trek',
    title: 'Hamta Pass Trek',
    location: 'Manali, Himachal Pradesh, India',
    duration: '5 days',
    difficulty: 'Moderate',
    cost: 10000,
    season: 'Summer',
    months: [
      'June',
      'July',
      'August',
      'September',
      'October'
    ],
    description: 'A dramatic crossover trek from lush Kullu valley to the barren landscapes of Spiti.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500',
    availability: 15,
    category: 'trending',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800'
      ],
      videos: [
        {
          id: 'hamta-1',
          title: 'Hamta Pass Trek Guide',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '9:10'
        }
      ]
    },

    highlights: [
      'Cross Hamta Pass (4,298m) for dramatic landscape contrast',
      'Transition from lush green Kullu Valley to stark Spiti desert',
      'Optional excursion to the stunning crescent Chandratal Lake',
      'Trek through dense deodar forests and alpine meadows',
      'Spectacular views of Deo Tibba and Indrasan peaks',
      'Accessible base: only 3 hours drive from Manali'
    ],

    included: [
      'Camping',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Travel to Manali',
      'Gear rental'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Manali to Jobra',
        description: 'Drive and trek start.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '2800m',
        duration: ""
      },
      {
        day: 2,
        title: 'Jobra to Balu Ka Ghera',
        description: 'Trek along river.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '3600m',
        duration: '5 hours'
      }
    ],
  },
  {
    id: 'kuari-pass-trek',
    title: 'Kuari Pass Trek',
    location: 'Chamoli, Uttarakhand, India',
    duration: '6 days',
    difficulty: 'Moderate',
    cost: 9000,
    season: 'Spring, Autumn, Winter',
    months: [
      'February',
      'March',
      'April',
      'October',
      'November',
      'December'
    ],
    description: 'Known as the Curzon Trail, this trek offers grand views of Nanda Devi, Dronagiri, and other Himalayan peaks.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500',
    availability: 14,
    category: 'popular',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
        'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=800'
      ],
      videos: [
        {
          id: 'kuari-1',
          title: 'Kuari Pass Trek Experience',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '9:45'
        }
      ]
    },

    highlights: [
      'Cross Kuari Pass (3,640m) with panoramic Himalayan views',
      'See Nanda Devi (7,816m), India\'s highest entirely Indian peak',
      'Traverse the ancient Lord Curzon Trail through Garhwal',
      'Camp in scenic Auli meadow with Himalayan backdrop',
      'Views of 13 peaks above 6,500m from the pass',
      'Rhododendron forests ablaze with colour in spring'
    ],

    included: [
      'Accommodation',
      'Meals',
      'Guide',
      'Permits'
    ],

    notIncluded: [
      'Transport',
      'Personal expenses',
      'Gear rental'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Joshimath',
        description: 'Drive through scenic mountain roads.',
        accommodation: 'Hotel',
        meals: 'Dinner',
        distance: '1875m',
        duration: ""
      },
      {
        day: 2,
        title: 'Joshimath to Gulling',
        description: 'Trek through forest trails.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '2900m',
        duration: '5 hours'
      },
      {
        day: 3,
        title: 'Gulling to Khullara',
        description: 'Gradual ascent with views.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '3300m',
        duration: '4 hours'
      },
      {
        day: 4,
        title: 'Kuari Pass Summit',
        description: 'Summit climb and return.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '3810m',
        duration: '7 hours'
      }
    ],
  },
  {
    id: 'nag-tibba-trek',
    title: 'Nag Tibba Trek',
    location: 'Tehri, Uttarakhand, India',
    duration: '2 days',
    difficulty: 'Easy',
    cost: 3500,
    season: 'All Year',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    description: 'Nag Tibba, at an elevation of 3,022 metres (9,915 ft), is the highest peak in the Lesser Himalayan region of the Garhwal Division of Uttarakhand state in India and of the Bugyals region. It lends its name to the Nag Tibba Range, itself the next-northerly of the five folds of the Himalayas. It is situated 16 km (9.9 mi) away from Landour cantonment, 57 kilometres (35 mi) from Mussoorie and 148 kilometres (92 mi) from New Tehri in the Tehri Garhwal district of Uttarakhand. The Nag Tibba Range is one of the three principal ranges of the Lesser Himalayas, along with the Dhauladhar and the Pir Panj',
    image: 'https://images.unsplash.com/photo-1549887534-3ec93abae1b6?w=500',
    availability: 25,
    category: 'upcoming',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1549887534-3ec93abae1b6?w=800'
      ],
      videos: []
    },

    highlights: [
      'Summit Nag Tibba (3,022m), highest peak of Lesser Himalayas',
      'Visit the locally revered Nag Devta serpent temple',
      '360° views: Bandarpoonch, Kedarnath, Srikanta, Gangotri range',
      'Magical stargazing from base camp away from city lights',
      'Beautiful snow-covered trails in winter months',
      'Perfect beginner weekend trek, just 85 km from Dehradun'
    ],

    included: [
      'Camping',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Transport',
      'Personal gear'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Base Camp',
        description: 'Drive and trek.',
        accommodation: 'Camp',
        meals: 'Dinner',
        distance: '2600m',
        duration: ""
      },
      {
        day: 2,
        title: 'Summit and Return',
        description: 'Sunrise hike and descend.',
        accommodation: 'NA',
        meals: 'Breakfast',
        distance: '3022m',
        duration: '5 hours'
      }
    ],
  },
  {
    id: 'goechala-trek',
    title: 'Goechala Trek',
    location: 'Sikkim, India',
    duration: '10 days',
    difficulty: 'Hard',
    cost: 18000,
    season: 'Spring, Autumn',
    months: [
      'March',
      'April',
      'May',
      'September',
      'October',
      'November'
    ],
    description: 'Goecha La is a high mountain pass in Gyalshing district, Sikkim, India in the Himalaya range. The southeast face of Kanchenjunga, the world\'s third highest mountain, can be viewed from the pass, which is also a base camp for those aspiring to scale the mountain. They say that when the government authorities first saw the view from Goecha La, they were so moved by the view that they decided to feature it on the Rs.100 note.',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500',
    availability: 8,
    category: 'premium',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800'
      ],
      videos: []
    },

    highlights: [
      'Close-up view of Kanchenjunga (8,586m), world\'s 3rd highest peak',
      'Sunrise spectacle from Dzongri Top over the Himalayan range',
      'Beautiful glacial Samiti Lake reflecting Mt. Pandim',
      'Trek through dense rhododendron forests blooming in spring',
      'Start from Yuksom, the historic first capital of Sikkim',
      'Spot red pandas, blue sheep, and Himalayan wildlife'
    ],

    included: [
      'Accommodation',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Flights',
      'Gear'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Yuksom Arrival',
        description: 'Start point.',
        accommodation: 'Hotel',
        meals: 'Dinner',
        distance: '1780m',
        duration: ""
      }
    ],
  },
  {
    id: 'buran-ghati-trek',
    title: 'Buran Ghati Trek',
    location: 'Himachal Pradesh, India',
    duration: '7 days',
    difficulty: 'Hard',
    cost: 16000,
    season: 'Summer, Autumn',
    months: [
      'May',
      'June',
      'September',
      'October'
    ],
    description: 'A thrilling trek with snow walls, river crossings, and dramatic landscapes.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500',
    availability: 10,
    category: 'adventure',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
      ],
      videos: []
    },

    highlights: [
      'Cross Buran Ghati Pass (4,700m) with a thrilling rope rappel down snow',
      'Descend dramatically into the remote Sangla Valley, Kinnaur',
      'Meadows of Litham and Lamakurti filled with wildflowers',
      'Views of Kinner Kailash range across the Baspa valley',
      'Remote trail through dense forests and high-altitude pastures',
      'Unique experience rappelling down a steep snow slope'
    ],

    included: [
      'Stay',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Transport',
      'Gear'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Shimla to Janglik',
        description: 'Drive to base.',
        accommodation: 'Guesthouse',
        meals: 'Dinner',
        distance: '2800m',
        duration: ""
      }
    ],
  },
  {
    id: 'beas-kund-trek',
    title: 'Beas Kund Trek',
    location: 'Manali, Himachal Pradesh, India',
    duration: '3 days',
    difficulty: 'Easy',
    cost: 7500,
    season: 'Summer',
    months: [
      'June',
      'July',
      'August',
      'September'
    ],
    description: 'A short trek to the origin of the Beas river surrounded by glaciers.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    availability: 20,
    category: 'short',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
      ],
      videos: []
    },

    highlights: [
      'Reach Beas Kund (3,690m), the sacred origin of River Beas',
      'Views of Friendship Peak (5,289m) and Hanuman Tibba (5,928m)',
      'Camp at Dhundi and Bakarthach in pristine alpine meadows',
      'Easy acclimatisation trek ideal before higher altitude treks',
      'Abundant wildflowers in the Solang Nullah valley',
      'Starting point just 15 km from Manali'
    ],

    included: [
      'Camping',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Transport',
      'Personal gear'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Manali to Solang',
        description: 'Drive and trek.',
        accommodation: 'Camp',
        meals: 'Dinner',
        distance: '2600m',
        duration: ""
      }
    ],
  },
  {
    id: 'pangarchulla-peak-trek',
    title: 'Pangarchulla Peak Trek',
    location: 'Chamoli, Uttarakhand, India',
    duration: '7 days',
    difficulty: 'Hard',
    cost: 13500,
    season: 'Spring, Autumn',
    months: [
      'April',
      'May',
      'October',
      'November'
    ],
    description: 'A challenging summit trek offering panoramic Himalayan views including Nanda Devi and Hathi Ghoda peaks.',
    image: 'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=500',
    availability: 10,
    category: 'adventure',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=800',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
      ],
      videos: [
        {
          id: 'pangarchulla-1',
          title: 'Pangarchulla Summit Climb',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '8:12'
        }
      ]
    },

    highlights: [
      'Summit Pangarchulla Peak (4,700m) with 360° Garhwal Himalaya views',
      'See Nanda Devi, Dronagiri, Chaukhamba, Kamet, and Mana peaks',
      'Traverse the beautiful Khullara and Tali alpine meadows',
      'One of the few beginner-friendly peak climbs in India',
      'Camp on the rim of Auli meadow with stunning mountain backdrop',
      'Ideal spring trek with snow underfoot and clear blue skies'
    ],

    included: [
      'Accommodation',
      'Meals',
      'Guide',
      'Permits'
    ],

    notIncluded: [
      'Transport',
      'Technical gear',
      'Personal expenses'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Joshimath',
        description: 'Drive to Joshimath.',
        accommodation: 'Hotel',
        meals: 'Dinner',
        distance: '1875m',
        duration: ""
      },
      {
        day: 2,
        title: 'Joshimath to Dhak to Gulling',
        description: 'Trek begins.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '2900m',
        duration: '5 hours'
      },
      {
        day: 3,
        title: 'Gulling to Khullara',
        description: 'Ascend through forests.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '3300m',
        duration: '4 hours'
      },
      {
        day: 4,
        title: 'Summit Day',
        description: 'Climb Pangarchulla Peak and return.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '4575m',
        duration: '8 hours'
      }
    ],
  },
  {
    id: 'tarsar-marsar-trek',
    title: 'Tarsar Marsar Trek',
    location: 'Kashmir, India',
    duration: '7 days',
    difficulty: 'Moderate',
    cost: 15000,
    season: 'Summer',
    months: [
      'July',
      'August',
      'September'
    ],
    description: 'A breathtaking trek through alpine lakes and lush meadows in Kashmir.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500',
    availability: 12,
    category: 'premium',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800'
      ],
      videos: []
    },

    highlights: [
      'Discover two pristine alpine lakes: Tarsar and Marsar',
      'Trek through the stunning Lidder Valley in Kashmir',
      'Vibrant wildflower meadows and crystal-clear streams',
      'Views of Kolahoi Glacier (5,425m), the largest in Kashmir',
      'Camp on the shores of the brilliant blue Tarsar Lake',
      'Experience the unique beauty of a Kashmiri alpine landscape'
    ],

    included: [
      'Stay',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Flights',
      'Gear'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Srinagar to Aru',
        description: 'Drive to basecamp.',
        accommodation: 'Camp',
        meals: 'Dinner',
        distance: '2400m',
        duration: ""
      }
    ],
  },
  {
    id: 'dzongri-trek',
    title: 'Dzongri Trek',
    location: 'Sikkim, India',
    duration: '6 days',
    difficulty: 'Moderate',
    cost: 14000,
    season: 'Spring, Autumn',
    months: [
      'March',
      'April',
      'May',
      'September',
      'October',
      'November'
    ],
    description: 'A short yet rewarding trek with panoramic views of Kanchenjunga.',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500',
    availability: 10,
    category: 'scenic',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800'
      ],
      videos: []
    },

    highlights: [
      'Sunrise views from Dzongri Top (4,600m) over the Kanchenjunga range',
      'Trek through the lush rhododendron forests of Sikkim',
      'Visit ancient monasteries: Yuksom and Tshoka',
      'Camp in the beautiful Tshoka valley with peak views',
      'Shorter version of the full Goechala expedition',
      'Wildlife: red panda, Himalayan black bear, various pheasants'
    ],

    included: [
      'Stay',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Permits',
      'Flights'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Yuksom Arrival',
        description: 'Start trek.',
        accommodation: 'Hotel',
        meals: 'Dinner',
        distance: '1780m',
        duration: ""
      }
    ],
  },
  {
    id: 'pin-parvati-pass',
    title: 'Pin Parvati Pass Trek',
    location: 'Himachal Pradesh, India',
    duration: '11 days',
    difficulty: 'Hard',
    cost: 28000,
    season: 'Summer',
    months: [
      'July',
      'August'
    ],
    description: 'One of the toughest treks connecting Parvati Valley to Spiti Valley.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    availability: 6,
    category: 'extreme',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
      ],
      videos: []
    },

    highlights: [
      'Cross the challenging Pin Parvati Pass (5,319m) into Spiti Valley',
      'Trek from the lush Parvati Valley to the stark Pin Valley',
      'Sacred Mantalai Lake (4,116m) at the foot of the pass',
      'One of India\'s most remote and demanding high-passes',
      'Views of Parvati, Kullu Eiger, and multiple 6,000m peaks',
      'Transition from Kullu\'s green forests to Spiti\'s barren plateaus'
    ],

    included: [
      'Stay',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Gear',
      'Insurance'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Kasol Arrival',
        description: 'Start trek preparation.',
        accommodation: 'Guesthouse',
        meals: 'Dinner',
        distance: '1580m',
        duration: ""
      }
    ],
  },
  {
    id: 'markha-valley-trek',
    title: 'Markha Valley Trek',
    location: 'Ladakh, India',
    duration: '8 days',
    difficulty: 'Moderate',
    cost: 22000,
    season: 'Summer',
    months: [
      'June',
      'July',
      'August',
      'September'
    ],
    description: 'A classic Ladakh trek through barren landscapes, monasteries, and river crossings.',
    image: 'https://images.unsplash.com/photo-1549887534-3ec93abae1b6?w=500',
    availability: 12,
    category: 'popular',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1549887534-3ec93abae1b6?w=800'
      ],
      videos: []
    },

    highlights: [
      'Cross two dramatic high passes: Ganda La (4,970m) and Kongmaru La (5,286m)',
      'Stay in traditional Ladakhi homestays and experience local culture',
      'Trek through Hemis National Park, habitat of the snow leopard',
      'Visit ancient monasteries: Hemis, Hankar, and Tacha Gompa',
      'Views of Kang Yatse (6,400m) and the Zanskar range',
      'Spot marmots, golden eagles, and Himalayan blue sheep'
    ],

    included: [
      'Accommodation',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Flights',
      'Gear'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Leh Arrival',
        description: 'Acclimatization day.',
        accommodation: 'Hotel',
        meals: 'Dinner',
        distance: '3500m',
        duration: ""
      }
    ],
  },
  {
    id: 'rupin-pass-trek',
    title: 'Rupin Pass Trek',
    location: 'Uttarakhand to Himachal Pradesh, India',
    duration: '8 days',
    difficulty: 'Moderate',
    cost: 17500,
    season: 'Spring, Autumn',
    months: [
      'May',
      'June',
      'September',
      'October'
    ],
    description: 'A dramatic crossover trek featuring hanging villages, waterfalls, snow bridges, and high-altitude passes.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500',
    availability: 10,
    category: 'adventure',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800'
      ],
      videos: [
        {
          id: 'rupin-1',
          title: 'Rupin Pass Trek Documentary',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          youtubeId: 'dQw4w9WgXcQ',
          duration: '11:05'
        }
      ]
    },

    highlights: [
      'Cross Rupin Pass (4,650m) from Uttarakhand into Himachal Pradesh',
      'Marvel at the massive multi-tiered Rupin Waterfall',
      'Pass through the remarkable "hanging village" of Jakha',
      'Dramatic shift from green valleys to arid high-altitude snowfields',
      'Panoramic views of the Kinner Kailash and Kinnaur ranges',
      'One of India\'s most visually diverse high-altitude crossings'
    ],

    included: [
      'Accommodation',
      'Meals',
      'Guide',
      'Permits'
    ],

    notIncluded: [
      'Transport',
      'Gear',
      'Insurance'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Dhaula',
        description: 'Drive to base village.',
        accommodation: 'Guesthouse',
        meals: 'Dinner',
        distance: '1550m',
        duration: ""
      },
      {
        day: 2,
        title: 'Dhaula to Sewa',
        description: 'Trek along river valley.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '2100m',
        duration: '6 hours'
      },
      {
        day: 3,
        title: 'Sewa to Jhaka',
        description: 'Climb to hanging village.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '2650m',
        duration: '5 hours'
      },
      {
        day: 4,
        title: 'Jhaka to Upper Waterfall Camp',
        description: 'Reach waterfall base.',
        accommodation: 'Camp',
        meals: 'All meals',
        distance: '3500m',
        duration: '5 hours'
      }
    ],
  },
  {
    id: 'ali-bedni-bugyal-trek',
    title: 'Ali Bedni Bugyal Trek',
    location: 'Uttarakhand, India',
    duration: '6 days',
    difficulty: 'Moderate',
    cost: 12000,
    season: 'Summer, Autumn',
    months: [
      'May',
      'June',
      'July',
      'August',
      'September',
      'October'
    ],
    description: 'Famous for vast alpine meadows and stunning views of Trishul and Nanda Ghunti.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500',
    availability: 15,
    category: 'scenic',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800'
      ],
      videos: []
    },

    highlights: [
      'Explore Ali Bugyal and Bedni Bugyal, India\'s largest high-altitude meadows',
      'Views of Nanda Ghunti, Trishul, and Nanda Devi peaks',
      'Camp in vast rolling meadows carpeted with alpine flowers',
      'Visit the ancient Bedni Kund temple and sacred glacial lake',
      'Roopkund Trek gateway: acclimatise and explore the region',
      'Trek through enchanting rhododendron and oak forests'
    ],

    included: [
      'Stay',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Transport',
      'Gear'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to Lohajung',
        description: 'Drive to base.',
        accommodation: 'Guesthouse',
        meals: 'Dinner',
        distance: '2300m',
        duration: ""
      }
    ],
  },
  {
    id: 'kedartal-trek',
    title: 'Kedartal Trek',
    location: 'Gangotri, Uttarakhand, India',
    duration: '7 days',
    difficulty: 'Hard',
    cost: 16000,
    season: 'Spring, Autumn',
    months: [
      'May',
      'June',
      'September',
      'October'
    ],
    description: 'A high-altitude trek to a pristine glacial lake at the base of Thalay Sagar.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    availability: 8,
    category: 'adventure',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
      ],
      videos: []
    },

    highlights: [
      'Reach Kedartal (4,750m), Shiva\'s Lake with Mt. Thalay Sagar reflection',
      'Navigate the challenging "Spider Wall" rock traverse section',
      'Begin at the sacred Gangotri Temple on the banks of the Bhagirathi',
      'Views of Thalay Sagar (6,904m), Bhrigupanth, and Meru peaks',
      'One of the most dramatic and less-commercialised Himalayan treks',
      'Unique blend of spiritual Gangotri pilgrimage and high-altitude adventure'
    ],

    included: [
      'Stay',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Gear',
      'Insurance'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Gangotri Arrival',
        description: 'Base preparation.',
        accommodation: 'Guesthouse',
        meals: 'Dinner',
        distance: '3048m',
        duration: ""
      }
    ],
  },
  {
    id: 'phulara-ridge-trek',
    title: 'Phulara Ridge Trek',
    location: 'Uttarkashi, Uttarakhand, India',
    duration: '6 days',
    difficulty: 'Moderate',
    cost: 11500,
    season: 'Spring, Autumn',
    months: [
      'May',
      'June',
      'September',
      'October'
    ],
    description: 'A unique ridge walk trek offering continuous panoramic Himalayan views.',
    image: 'https://images.unsplash.com/photo-1549887534-3ec93abae1b6?w=500',
    availability: 12,
    category: 'scenic',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1549887534-3ec93abae1b6?w=800'
      ],
      videos: []
    },

    highlights: [
      'Walk the spectacular Phulara Ridge with 360° Himalayan views',
      'Camp directly on the ridge above 3,600m for starlit nights',
      'Views of Swargarohini, Black Peak, Bandarpoonch, and Kedarnath range',
      'Trek through Govind Wildlife Sanctuary, home to snow leopard',
      'Remote trail through ancient Har-ki-Dun valley settlements',
      'Ridge walking with views into both Tons and Rupin valleys'
    ],

    included: [
      'Stay',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Transport',
      'Gear'
    ],

    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Sankri',
        description: 'Drive to base.',
        accommodation: 'Guesthouse',
        meals: 'Dinner',
        distance: '1950m',
        duration: ""
      }
    ],
  },
  {
    id: 'sandakphu-phalut-trek',
    title: 'Sandakphu Phalut Trek',
    location: 'West Bengal, India',
    duration: '7 days',
    difficulty: 'Easy',
    cost: 12000,
    season: 'Spring, Autumn',
    months: [
      'March',
      'April',
      'May',
      'September',
      'October',
      'November'
    ],
    description: 'Sandakphu or Sandakpur at 3,636 m (11,929 ft) is a mountain peak in the Singalila Ridge on the border between India and Nepal. It is the highest point of the ridge and of the state of West Bengal, India. The peak is located at the edge of the Singalila National Park and has a small village on the summit with a few hotels. Four of the five highest peaks in the world, Everest, Kangchenjunga, Lhotse and Makalu can be seen from its summit. It also affords a pristine view of the entire Kangchenjunga Range. Sandakphu is also known as the land of poisonous flowers.',
    image: 'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=500',
    availability: 18,
    category: 'scenic',

    gallery: {
      photos: [
        'https://images.unsplash.com/photo-1464822759844-d150ad6d1c6d?w=800'
      ],
      videos: []
    },

    highlights: [
      'Witness the famous "Sleeping Buddha" view of the Kanchenjunga range',
      'See four of the world\'s five highest peaks on a clear day',
      'Summit Sandakphu (3,636m), the highest point in West Bengal',
      'Trek through Singalila National Park, home of the red panda',
      'Classic teahouse trek along the Indo-Nepal border ridge',
      'Spectacular rhododendron blooms in March–April'
    ],

    included: [
      'Stay',
      'Meals',
      'Guide'
    ],

    notIncluded: [
      'Transport',
      'Personal expenses'
    ],

    itinerary: [
      {
        day: 1,
        title: 'NJP to Manebhanjan',
        description: 'Drive to start point.',
        accommodation: 'Guesthouse',
        meals: 'Dinner',
        distance: '2000m',
        duration: ""
      }
    ],
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

export const getUserById = (id: string): User | undefined => {
  return DUMMY_USERS.find(user => user.id === id)
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
    .sort((a, b) => a.title.localeCompare(b.title))
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