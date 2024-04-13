"use client"
import { BASE_URL } from '@/constants';
import { CallControls, CallingState, SpeakerLayout, StreamTheme, useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';


const CallUi = ({id}:any) => {
const [cookies] = useCookies(['token']);
    const { useCallCallingState, useParticipantCount,    useLocalParticipant,
        useRemoteParticipants, } = useCallStateHooks();
        const router = useRouter()
  const callingState = useCallCallingState();
  const localParticipant = useLocalParticipant();
  const remoteParticipants = useRemoteParticipants();
 useEffect(()=>{
    if(callingState===CallingState.LEFT){
        axios.put(`${BASE_URL}/booking/end?booking_id=${id}`,{},{headers:{Authorization:`Bearer ${cookies.token}`}}).then((res)=>{
            router.replace(`/meeting/end?id=${id}`)
                })
                .catch((error:any)=>{
                    toast.error(error.message);
                })
    }
 },[callingState])
  return (
  
  <>
  <ToastContainer/>
  {
(callingState!== CallingState.JOINED) ? 
(
    <div>Loading Call ...</div>

)
:
(


   <StreamTheme>
   <SpeakerLayout participantsBarPosition='bottom' />
   <CallControls />
 </StreamTheme>


)
}
  </>
  )
}

export default CallUi