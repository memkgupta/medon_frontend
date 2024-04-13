import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
    <h2 className="text-2xl font-semibold mb-4">Booking Successful!</h2>
    <p className="text-gray-600 mb-4">Your booking has been successfully completed.</p>
    <Link replace={true} href="/home" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
  
        Back to Home
    
    </Link>
  </div>
  )
}

export default page