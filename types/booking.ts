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

export interface BookingWithTrek extends Booking {
    trek?: {
        title: string
        location: string
        image: string
    }
}
