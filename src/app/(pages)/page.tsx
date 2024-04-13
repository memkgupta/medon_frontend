import CommunityForum from "@/components/CommunityForum";
import Navbar from "@/components/Navbar";
import QuickCard from "@/components/QuickCard";
import { quickLinks, specialityCards } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-24 py-4">
     <p className="text-center text-7xl font-bold">Medon</p>
     <p className="text-center text-2xl italic text-gray-600">Empowering Health , Enriching lives</p>
      <div className="mt-4 p-4 flex justify-center gap-5">
      {quickLinks.map((item,index)=>(
        <QuickCard title={item.title} imageUrl={`./${item.imageUrl}`} link={item.link}/>
      
      ))}
      </div>
      <p className="text-start text-2xl mt-12 font-bold">Consult top doctors online for any health concern</p>
      <div className="flex gap-5 justify-center mt-4">
      {specialityCards.map((item,index)=>(
        <QuickCard title={item.title} imageUrl={`./${item.imageUrl}`} link={item.link}/>

       ))}
      </div>
      <CommunityForum/>
      <div className="flex justify-center">
      <Link href={"/community"} className='bg-green-500 text-white p-4 rounded-md mt-4 mx-auto'>Visit</Link>

      </div>
      <div className="flex gap-2 items-center mt-12">
      <Image src={"/multi-lingual.jpg"} width={500} height={500} alt="Multi lingual support"></Image>
      <div className="flex flex-col gap-5 justify-start">
        <p className="text-5xl font-bold">Multilanguage Support</p>
        <p className="text-sm text-gray-700 text-justify">Discover healthcare without language barriers on our platform. With multilingual support, we ensure everyone can access quality care. Our diverse team of doctors speaks various languages, including English, Spanish, Mandarin, Hindi, and more. Clear communication is prioritized, empowering patients to make informed decisions about their health. Whether you're in need of medical advice or treatment, rest assured that our experts will understand you. Join us today and experience personalized care tailored to your language and cultural preferences. Break down barriers and embrace inclusivity in healthcare.</p>
      </div>
  </div>
    </main>
  );
}
