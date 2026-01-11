'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

export const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = '+91 8319931901' // Update this with your actual WhatsApp business number
    const message = encodeURIComponent(
      'Hi! I am interested in learning more about your trekking packages and would like to get more information.'
    )

    // WhatsApp Web URL format
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-[9999] bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>

      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </button>
  )
}