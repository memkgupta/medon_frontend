'use client'
import AuthContext, { AuthProvider } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios, { AxiosError } from 'axios'
import {toast,ToastContainer} from 'react-toastify'

import "react-toastify/dist/ReactToastify.css"
import { BASE_URL } from "@/constants";
import Navbar from "@/components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cookies] = useCookies(['token']);
  const [user,setUser] = useState({});
  const[loading,setLoading]=useState(true);
  const [authStatus,setAuthStatus]=useState(false);
  useEffect(()=>{
    if(cookies?.token){

        axios.get(`${BASE_URL}/user/me`,{headers:{Authorization:`Bearer ${cookies.token}`}}).then((res)=>{
      setAuthStatus(true);
      setUser(res.data.user);
      
        }).catch((error:AxiosError)=>{
      toast.error(error.message);
        })
        .finally(()=>{
      setLoading(false);
        })
      }
      else{
        setLoading(false);
      }
},[])
  return (
    <>
    {
        !loading?
        (
            <AuthProvider value={{user:user,authStatus:authStatus,setAuthStatus:setAuthStatus,setUser:setUser}}>
            <Navbar/>
       {children}
    </AuthProvider>
        ):"Loading"
    }
    </>
  );
}
