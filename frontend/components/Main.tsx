import Filter from "./common/Filter";
import Searchbar from "./common/Searchbar";
const Main = () => {
    return (  
         <div className="w-[70%] h-[85%] bg-primary flex flex-col py-10 px-40 rounded-2xl">
            <div className="flex flex-row justify-between">
                <Filter/>
                <Searchbar/>
            </div>
            <div className="flex flex-col mt-5 space-y-5 px-3 h-[90%] overflow-auto">
                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3">
                    <div className="flex flex-row space-x-3 content-center">
                        <input type="checkbox" value="" className="w-5 h-4 bg-red-500" />
                        <p>Make a website to put in my portfolio</p>
                    </div>
                    <div className="text-xs text-red-700 ml-8">
                            Sat, Jan 25,2025, 7:00 AM
                    </div>
                </div>

                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3">
                    <div className="flex flex-row space-x-3 content-center">
                        <input type="checkbox" value="" className="w-5 h-4 bg-red-500" />
                        <p>Make a website to put in my portfolio</p>
                    </div>
                    {/* <div className="text-xs text-red-700 ml-8">
                            Sat, Jan 25,2025, 7:00 AM
                    </div> */}
                </div>
                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3"></div>
                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3"></div>
                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3"></div>
                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3"></div>
                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3"></div>
                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3"></div>
                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3"></div>
                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3"></div>
                <div className="flex flex-col flex-shrink-0 text-sm border bg-secondary h-14 rounded-2xl justify-center pl-3"></div>
            </div>
        </div>
    );
}
 
export default Main;