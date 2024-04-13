import RatingModal from '@/components/RatingModal';
import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {
    const [showModal, setShowModal] = useState(false);

  const handleRateMeeting = () => {
    setShowModal(true);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-3xl font-bold mb-6">Meeting Ended</h1>
    <p className="text-lg text-gray-700 mb-8">Thank you for attending the meeting!</p>
    <button
      onClick={handleRateMeeting}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Rate Meeting
    </button>

    {showModal && <RatingModal onClose={() => setShowModal(false)} />}
    <Link href={"/"} className='bg-green-500 text-white p-2 rounded-md'>Go Back Home</Link>
  </div>
  )
}

export default page