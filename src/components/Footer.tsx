import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16  bottom-0 w-full p-2">
    <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-lg font-semibold">MedOn</h2>
        <p className="text-sm">Providing accessible healthcare anytime, anywhere.</p>
      </div>
      <nav className="flex flex-wrap justify-center md:justify-end">
        <Link href="#" className="mx-3 my-1 hover:text-gray-400">Home</Link>
        <Link href="#" className="mx-3 my-1 hover:text-gray-400">Services</Link>
        <Link href="#" className="mx-3 my-1 hover:text-gray-400">About Us</Link>
        <Link href="#" className="mx-3 my-1 hover:text-gray-400">Contact</Link>
        <Link className="mx-3 my-1 hover:text-gray-400" href={"/doctor-registration"}>Register as Doctor</Link>
      </nav>
    </div>
  </footer>
  )
}

export default Footer