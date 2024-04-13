import StreamProvider from '@/context/StreamClientProvider'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
   <main>
    <StreamProvider>
    {children}
    </StreamProvider>

   </main>
  )
}

export default layout