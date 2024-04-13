import Navbar from "@/components/Navbar";
import QuickCard from "@/components/QuickCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
     
      <div className="mt-4 p-4 flex justify-center gap-5">
      <QuickCard title="Book Medicines" imageUrl="./delivery.jpg" link="/medicines"/>
      </div>
    </main>
  );
}
