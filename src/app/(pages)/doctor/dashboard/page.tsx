'use client'
import UserBookings from '@/components/UserBookings';
import { BASE_URL } from '@/constants';
import useAuth from '@/context/useAuth'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

const page = () => {
    const {authStatus,user} = useAuth();
    const router = useRouter();
    const [bookings,setBookings] = useState<any>();
    const [loading,setLoading] = useState(true)
    const [cookies] = useCookies(['token']);
    useEffect(()=>{
        if(!authStatus){
            router.push("/not-found");
        }
        axios.get(`${BASE_URL}/doctor/dashboard/bookings`,{headers:{Authorization:`Bearer ${cookies.token}`}})
        .then((res)=>{
            setBookings(res.data.bookings);
        })
        .catch((error:any)=>{
            
toast.error(error.response?.message);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[authStatus])
  return (
   <>
   {
    loading ?
    (
        <div>
            <p>Loading ...</p>
        </div>
    ):
    (
        <div>
             {bookings&&<UserBookings bookings={bookings}/>}
        </div>
    )
   }
   </>
  )
}

export default page