import Link from 'next/link'
import React from 'react'

const UserBookings = ({bookings}:{bookings:any}) => {
  return (
    <div className="booking-showcase">
    
    {bookings.length === 0 ? (
      <p>No bookings found.</p>
    ) : (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking:any) => (
          <Link href={`/account/booking/${booking._id}`} key={booking._id} className="border text-black border-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Booking ID: {booking.id}</h3>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time Slot:</strong> {booking.timeSlot.startingTime} - {booking.timeSlot.endTime}</p>
            
            {/* Add more booking details as needed */}
          </Link>
        ))}
      </div>
    )}
  </div>
  )
}

export default UserBookings