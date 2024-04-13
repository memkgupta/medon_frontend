'use client'
import useAuth from '@/context/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  const {authStatus} = useAuth();
  return (
    <nav className='nav flex bg-emerald-200 items-center justify-between py-4'>
      <div className="logo"> <Image width={30} height={30} alt='logo' src={"./next.svg"}/></div>
      <div className='searchbar flex items-center gap-2 bg-white rounded-xl px-2 py-1'><span><CiSearch/></span><input className='rounded-r-xl outline-none' type="text" placeholder='Search' /></div>
      <div className="features"><ul className='flex gap-4' >
        <Link className='' href={"/"}>Home</Link>
        <Link href={"/doctors"}>Doctors</Link>
        <Link href={"/contact"}>Contact</Link>
        </ul></div>
     <div className='flex items-center gap-7 px-4'>
        <div><FaShoppingCart /></div>
        {authStatus?(<Link href={"/account"}><MdOutlineAccountCircle size={40} /></Link>):(<Link className='bg-green-400 px-2 py-1 rounded-md text-xs' href={"/login"}>Login/Singup</Link>)}
        </div>
    </nav>
  )
}

export default Navbar
