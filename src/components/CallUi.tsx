"use client"
import { CallControls, CallingState, SpeakerLayout, StreamTheme, useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import React from 'react'


const CallUi = () => {

    const { useCallCallingState, useParticipantCount,    useLocalParticipant,
        useRemoteParticipants, } = useCallStateHooks();
  const callingState = useCallCallingState();
  const localParticipant = useLocalParticipant();
  const remoteParticipants = useRemoteParticipants();
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