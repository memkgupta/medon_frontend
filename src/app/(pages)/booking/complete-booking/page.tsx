'use client'
import { BASE_URL } from '@/constants'
import axios from 'axios'
import { useRouter, useSearchParams  } from 'next/navigation'

import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify'

const page = () => {
    const searchParams = useSearchParams()
    const [description, setDescription] = useState('');
const id = searchParams.get('id')
const router = useRouter()
const [cookies] = useCookies(['token'])
    const handleSubmit = async(e:any) => {
      e.preventDefault();
  
      if(id&&cookies){

       try {
        const res = await axios.post(`${BASE_URL}/booking/complete`,{id:id,description:description},{headers:{Authorization:`Bearer ${cookies.token}`}})
        toast.success("Booking Completed Successfully");
        router.replace(`/booking/success?id=${res.data.booking._id}`);
       } catch (error) {
        toast.error("Some error occured");
       }
              setDescription('');
      }
      // Add your submit logic here, such as sending the message to a backend API
 
    };
  
    const handleChange = (e:any) => {
      setDescription(e.target.value);
    };
  return (
    <div className="container mx-auto px-4 py-8 h-full">
        <ToastContainer/>
    <h2 className="text-2xl font-semibold mb-4">Add Your Note and description</h2>
    <form onSubmit={handleSubmit}>
      <textarea
        value={description}
        onChange={handleChange}
        placeholder="Enter your message here..."
        className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:border-blue-500"
        rows={6}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default page