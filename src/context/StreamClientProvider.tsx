'use client'
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
  } from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { BASE_URL } from '@/constants';
import { toast } from 'react-toastify';

  
  const apiKey = '4h4yrwctu7en';
  const userId = 'user-id';
  const token = 'authentication-token';
  const user: User = { id: userId };
  

  
   const StreamProvider = ({children}:{children:React.ReactNode}) => {
    
    const [videoClient,setVideoClient] = useState<StreamVideoClient>()
    const router = useRouter();
const {user,authStatus} = useAuth();
const[cookies] = useCookies(['token'])
    useEffect(()=>{
if(!authStatus||!user){
    return;
}
if(!apiKey){
    throw new Error("Stream api key missing")
}
if(!cookies?.token){
    router.replace("/login")
}
let token;
axios.get(`${BASE_URL}/user/get-call-token`,{headers:{Authorization:`Bearer ${cookies.token}`}}).then((res)=>{
    token = res.data.token;
    const client = new StreamVideoClient({apiKey,user:{id:user.id,name:user.fullName,image:user.profile_pic},token:token})
    setVideoClient(client);

})
    .catch((error:any)=>{
        toast.error("some error occured");
    })

    },[user,authStatus])
    return (

        <>
        {!videoClient ? 
        (
            <p>Loading...</p>
        )
    :
    (
        <StreamVideo client={videoClient}>
       {children}
      </StreamVideo>
    )}
        </>
    );
  };
  export default StreamProvider