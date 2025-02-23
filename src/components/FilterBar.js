import { useState } from "react";

const FilterBar = () => {
  const [searchtext, setsearchtext] = useState("");
  return (
    <div>
      <div>
        <input className="px-6 py-1 border-2 ml-2 rounded-full" placeholder="Search Restaurant Name" value={searchtext}
          onChange={(e) => { setsearchtext(e.target.value) }}>
        </input>
        <button className="px-6 py-1 border-2 ml-2 rounded-full " onClick={() => {
          const filteredres = listofresto.filter((info) => info.info.name.toLowerCase().includes(searchtext.toLowerCase()))
          setfilteredres(filteredres);
        }}>Search
        </button>
      </div>
      <div className="  top-0 flex mt-4 font-[14px] bg-white">
        <div className=" "><button className="cursor-pointer px-6 py-1 border-2 ml-2 rounded-full">Filter</button></div>
        <div className="px-6 py-1 border-2 ml-2 rounded-full">Sort By</div>
        <div className=""><button className="cursor-pointer px-6 py-1 border-2 ml-2 rounded-full">Ratings 4.0+</button></div>
        <div className="px-6 py-1 border-2 ml-2  rounded-full">Pure Veg</div>
        <div className="px-6 py-1 border-2 ml-2 rounded-full">Offers</div>
        <div className="px-6 py-1 border-2 ml-2 rounded-full">Rs.300-Rs.600</div>
        <div className="px-6 py-1 border-2 ml-2 rounded-full">Less than Rs.300</div>
      </div>
    </div>
  )
};

export default  FilterBar;