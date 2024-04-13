'use client'
import { BASE_URL } from '@/constants';
import useAuth from '@/context/useAuth';
import { doctorProps } from '@/types'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';

const TimeSlotsCard = ({doctor}:{doctor:doctorProps}) => {
    const [startDate, setStartDate] = useState<Date|null>(new Date());
    const router = useRouter();
    const[selectedTimeSLot,setSelectedTimeSlot]=useState<{index:number,isVacant:boolean}|null>(null)
const handleTimeSlotSelect = (index:number)=>{
    console.log(selectedTimeSLot)
    if(doctor){
        const data = {timeSlot:doctor.timeSlots[index],doctorId:doctor._id,date:startDate}
        axios.post(`${BASE_URL}/booking/check-time-slot`,data).then((res)=>{
     const resData = res.data;
     if(resData.isVacant){
         toast.success("Yay Appointment is availaible");
         setSelectedTimeSlot({index:index,isVacant:true})
     }
     else{
         toast.info("Selected TimeSlot is not availaible");
         setSelectedTimeSlot({index:index,isVacant:false})

     }
        })
        .catch((error:any)=>{
        
             toast.error("Some Error Occured");
         
        })
    }
}
const [cookies] = useCookies(['token'])
const {authStatus} = useAuth();

const initiateBooking = async()=>{
if(!authStatus){
    router.push("/login")
}
    if(selectedTimeSLot&&selectedTimeSLot.isVacant&&cookies.token){
        try {
            const res = await axios.post(`${BASE_URL}/booking/start`,{timeSlot:doctor.timeSlots[selectedTimeSLot?.index],date:startDate,doctorId:doctor._id},{headers:{
                Authorization:`Bearer ${cookies.token}`
            }});
            if(res.status===200){
                toast.success("Booking Started Successfully");
                router.push(`/booking/complete-booking?id=${res.data.booking._id}`);
            }
        } catch (error:any) {
            toast.error(error.message)
        }
    }
  
}
  return (
    <div>
        <ToastContainer/>
        <p>Select Date</p>
    <DatePicker className='bg-blue-500 rounded-full text-white text-center' selected={startDate} onChange={(date) => setStartDate(date)} />
    <div className="grid grid-cols-2 gap-2 mt-5">
 {
    doctor.timeSlots.map((timeSlot,index)=>(
        <button key={`timeSlot-${index}`} onClick={()=>{handleTimeSlotSelect(index)}}  className={`rounded-md p-2 text-wrap border border-gray-700 ${selectedTimeSLot?.index===index?(selectedTimeSLot.isVacant?'bg-green-300':'bg-red-300'):''}`}>
            <span>
{timeSlot.startingTime} - {timeSlot.endTime}
            </span>
        </button>
    ))
 }
    </div>
    <div className='flex justify-center text-white'>
    <button onClick={initiateBooking} disabled={!(selectedTimeSLot!=null&&selectedTimeSLot.isVacant)} className='bg-blue-400 p-2 rounded-md mt-2 mx-auto'>Book Appointment</button>

    </div>
    </div>
  )
}

export default TimeSlotsCard