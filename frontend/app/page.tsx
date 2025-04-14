import Image from "next/image";
import Filter from "@/components/Filter";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <div className="items-center justify-items-center text-white">
         <div className="w-[70%] h-screen bg-primary flex flex-col py-10 px-40">
            <div className="flex flex-row justify-between">
                <Filter/>
                <Searchbar/>
            </div>
            <div>
               
            </div>
        </div>
    </div>
  );
}
