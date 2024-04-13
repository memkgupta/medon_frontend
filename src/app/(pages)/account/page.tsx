'use client'
import UserBookings from '@/components/UserBookings';
import { BASE_URL } from '@/constants';
import useAuth from '@/context/useAuth'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

const account = () => {
    const {user,authStatus} = useAuth();
    const [data,setData] = useState();
    const [bookings,setBookings]=useState([]);
  const [loading,setLoading] = useState(true);
    const[cookies] = useCookies(['token']);
    const router = useRouter();
    useEffect(()=>{
        if(cookies?.token){
            axios.get(`${BASE_URL}/user/account-details`,{headers:{Authorization:`Bearer ${cookies.token}`}}).then((res:any)=>{
                const data = res.data;
                const userData = data.userData;
        
        setBookings(userData.allBookings);
                })
                .catch((error:any)=>{
                  toast.error(error.message);
                })
                .finally(()=>{
                  setLoading(false);
                })
        }
        else{
            if(!authStatus){
                router.push("/login");
                
            }
        }
       console.log(user)
        
    },[authStatus,user])
  return (
<div>
{
    user && 
    (
        <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="text-lg font-semibold mb-4">User Details</h2>
        <div>
          <p className="text-gray-600 mb-2">Name: {user.fullName}</p>
          <p className="text-gray-600 mb-2">Phone: {user.phone}</p>
          {/* <p className="text-gray-600 mb-2">Location: {user.location}</p> */}
          {/* Add more details as needed */}
        </div>
        {bookings && <UserBookings bookings={bookings}/>}
      </div>
    )
   }
</div>
  )
}

export default account