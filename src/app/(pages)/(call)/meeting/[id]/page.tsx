"use client"
import CallUi from '@/components/CallUi';
import { Call, StreamCall, useStreamVideoClient } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import '@stream-io/video-react-sdk/dist/css/styles.css';
import axios from 'axios';
import { BASE_URL } from '@/constants';
import { headers } from 'next/headers';
import { useCookies } from 'react-cookie';
import useAuth from '@/context/useAuth';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
const page = ({params}:{params:{id:string}}) => {
const [call,setCall] = useState<Call>();
const {user,authStatus} = useAuth();
const router = useRouter();
const client = useStreamVideoClient();
const [cookies] = useCookies(['token']);
const [loading,setLoading] = useState(true);
  useEffect(()=>{
    if(!authStatus){
      router.replace("/not-found");
    }
    else{
     
      axios.put(`${BASE_URL}/booking/start?booking_id=${params.id}`,{},{headers:{Authorization:`Bearer ${cookies.token}`}})
      .then((res)=>{
        const clientCall =  client?.call('default',params.id);
        setCall(clientCall);
      
     clientCall?.join({create:true})
      })
      .catch((error:any)=>{
        toast.error(error.message);
        router.back();
      })
      .finally(()=>{setLoading(false)})
      
    }
   
  },[authStatus])

  return (
<>
<ToastContainer/>
{loading?
(
  <div>Loading ....</div>
):
(
<>
{call!=undefined &&  <StreamCall call={call}>
   <CallUi></CallUi>
</StreamCall>}
</>
)}
</>

  )
}

export default page