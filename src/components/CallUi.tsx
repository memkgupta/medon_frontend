"use client"
import { CallControls, CallingState, SpeakerLayout, StreamTheme, useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'


const CallUi = () => {

    const { useCallCallingState, useParticipantCount,    useLocalParticipant,
        useRemoteParticipants, } = useCallStateHooks();
        const router = useRouter()
  const callingState = useCallCallingState();
  const localParticipant = useLocalParticipant();
  const remoteParticipants = useRemoteParticipants();
 useEffect(()=>{
    if(callingState===CallingState.LEFT){
        router.push(`/meeting/end`)
    }
 },[callingState])
  return (
  
  <>
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