'use client'
import useAuth from '@/context/useAuth'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const BookingDetails = ({booking}:{booking:any}) => {
    const {user,authStatus} = useAuth();
    const client = useStreamVideoClient();
    const router = useRouter();
    const [values,setValues] = useState({
      dateTime:new Date(),
      description:'',
      link:''
    })
    const [callDetails,setCallDetails] = useState<Call>()
    const createMeeting = async()=>{
      router.push(`/meeting/${booking._id}`)
    }
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4"> Session Details</h2>
      <div className="flex flex-col space-y-4">
        <div>
          <p className="font-semibold">Doctor:</p>
          <p>Dr. {booking.doctor.name}</p>
        </div>
        <div>
          <p className="font-semibold">Date:</p>
          <p>{booking.date}</p>
        </div>
        <div>
          <p className="font-semibold">Time:</p>
          <p>{booking.timeSlot.startingTime} - {booking.timeSlot.endTime}</p>
        </div>
        
       
        <div>
          <p className="font-semibold">Notes:</p>
          <p>{booking.description}</p>
        </div>
      </div>
      {user && user.id===booking.doctor.userId ? <button onClick={createMeeting} className='bg-blue-500 text-white rounded-md p-2'>
        Start Session
        </button>:
       ( booking.isStarted && (
          (<button onClick={createMeeting} className='bg-blue-500 text-white rounded-md p-2'>
        Attend Session
        </button>)
        ))}

        
    </div>
  )
}

export default BookingDetails