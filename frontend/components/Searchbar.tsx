const Searchbar = () => {
    return (  
        <div className="border-2 border-secondary w-60 h-11 rounded-2xl flex flex-row items-center px-2 ">
            <div className="">
                <img src="images/searchIcon.png" alt="" width={40} height={40}/>
            </div>
            <div className="    w-full ">
                <input type="text" />
            </div>
        </div>
    );
}
 
export default Searchbar;