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
        <p className="text-sm text-gray-700 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam adipisci commodi assumenda facilis debitis provident officiis quam! Vel quidem corporis sequi culpa modi atque, iusto consectetur! Tempora et blanditiis reiciendis laudantium fugiat dolore cupiditate nam nostrum quisquam mollitia. Delectus dolorem non debitis rerum magni esse. Eligendi asperiores quam incidunt deleniti harum blanditiis quas modi ratione quibusdam dolor, nisi adipisci eveniet laboriosam quasi qui, magnam cupiditate aspernatur numquam distinctio deserunt est tenetur? Id laboriosam animi a laborum dolores incidunt eligendi voluptate repudiandae ipsam ad amet, officia praesentium sint! Maiores voluptatum nulla, odit porro quae laborum iste et? Vero, aperiam facilis.</p>
      </div>
  </div>
    </main>
  );
}
