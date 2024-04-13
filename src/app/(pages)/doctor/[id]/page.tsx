'use client'

import TimeSlotsCard from '@/components/TimeSlotCard';
import { BASE_URL } from '@/constants';
import { doctorProps } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = ({params}:{params:{id:string}}) => {
const id = params.id;
const [doctor,setDoctor]=useState<doctorProps|null>(null);
const[loading,setLoading] = useState(true);
    useEffect(()=>{
axios.get(`${BASE_URL}/doctor/${id}`).then((res)=>{
    setDoctor(res.data.doctor);
}).catch((error:any)=>{
    if(error.response){
        toast.error(error.response.data.message);
    }
    else{
        toast.error("Some error occured");
    }
    
})
.finally(()=>{
    setLoading(false);
})
    },[id])

  return (
   <>
   {loading && "Loading"}
   {doctor? (
    <div className='flex justify-between gap-2 mt-12 max-w-5xl'>
   <div className="container   ">
     <div className=" max-w-3xl">
       <div className="bg-white shadow-md rounded-lg p-6">
         <div className="flex items-center justify-between mb-4">
           <h1 className="text-2xl font-semibold">Dr {doctor.name}</h1>
           <p className="text-gray-600">Rating: {doctor.ratings}</p>
         </div>
         <div className="mb-4">
           <img src={doctor.image} alt={doctor.name} className="w-full rounded-lg" />
         </div>
         <div>
           <h2 className="text-lg font-semibold mb-2">Qualifications:</h2>
           <ul className="list-disc list-inside">
             {doctor.qualifications.map((qualification, index) => (
               <li key={index} className="text-gray-600">
                 {qualification.name} from {qualification.institute} (Passing Year: {qualification.passingYear})
               </li>
             ))}
           </ul>
         </div>
         <div className="mt-4">
           <h2 className="text-lg font-semibold mb-2">Gender:</h2>
           <p className="text-gray-600">{doctor.gender}</p>
         </div>
         <div className="mt-4">
           <h2 className="text-lg font-semibold mb-2">License Number:</h2>
           <p className="text-gray-600">{doctor.licenseNumber}</p>
         </div>
         <div className="mt-4">
           <h2 className="text-lg font-semibold mb-2">Contact Info:</h2>
           <p className="text-gray-600">Email: {doctor.contactInfo.email}</p>
           <p className="text-gray-600">Phone: {doctor.contactInfo.phone}</p>
           <p className="text-gray-600">Address: {doctor.contactInfo.address}</p>
         </div>
         <div className="mt-4">
           <h2 className="text-lg font-semibold mb-2">Consultation Fee:</h2>
           <p className="text-gray-600">{doctor.consultationFee}</p>
         </div>
        
       </div>
     </div>
   </div>
   <div>
    <TimeSlotsCard doctor={doctor}/>
   </div>
    </div>
  
   )
:
(
    <div className="container mx-auto px-4 py-8 text-center">
    <h2 className="text-2xl font-semibold mb-4">Doctor Not Found</h2>
    <p className="text-gray-600">Sorry, the requested doctor could not be found.</p>
  </div>
)}

   </>
  )
}

export default page