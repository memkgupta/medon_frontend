"use client";
import BookingDetails from "@/components/BookingDetails";
import { BASE_URL } from "@/constants";
import useAuth from "@/context/useAuth";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

const page = ({ params }: { params: { id: string } }) => {
  const [booking, setBooking] = useState<any>();
  const [cookies] = useCookies(["token"]);
  const { authStatus } = useAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!authStatus) {
      router.push("/login");
      return;
    }
    axios
      .get(`${BASE_URL}/booking/details?booking_id=${params.id}`, {
        headers: { Authorization: `Bearer ${cookies.token}` },
      })
      .then((res) => {

        setBooking(res.data.booking);
      })
      .catch((error: any) => {
        if (error.response) {
          toast.error(error.response.message);
        } else {
          toast.error(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return <div className="min-h-screen">
    <ToastContainer/>
    {booking && <BookingDetails booking={booking}/>}</div>;
};

export default page;
