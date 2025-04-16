import Filter from "./common/Filter";
import Searchbar from "./common/Searchbar";
const Main = () => {
    return (  
         <div className="w-[70%] h-[85%] bg-primary flex flex-col py-10 px-40 rounded-2xl">
            <div className="flex flex-row justify-between">
                <Filter/>
                <Searchbar/>
            </div>
            <div>
            </div>
        </div>
    );
}
 
export default Main;