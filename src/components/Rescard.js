
import Reosto from "./Reosto";
import Mainresto from "./Mainresto";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useRescard from "./useRescard";
import Simmerui from "./Simmerui"
import FilterBar from "./FilterBar";

const Rescard = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchtext, setsearchtext] = useState();

  const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const resto = useRescard(API);
  console.log(resto);
  const RestoD = resto?.data?.cards[4 ]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
  useEffect(() => { setlistofres(RestoD); }, [resto]);
  console.log(listofres);
  console.log(RestoD);
  const Palce = resto?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
  console.log(Palce);

  return  (listofres === null) ? <Simmerui/>:(
    <div className="w-[1000px] mx-auto border-b-[1px]">
      <div>

      </div>
      <div>
        <span className="font-bold text-2xl flex" >Top restaurant chains in Chhindwara</span>
        <div className="p-4 flex  mx-auto overflow-hidden">
          {Palce.map((outs) => <Reosto key={outs.info.id} sata={outs} />)}
        </div>
      </div>
      <div className=" ">
        <span className="font-bold text-2xl flex" >Restaurants with online food delivery in Chhindwara</span>
        <div>
          <div>
            <div>
              <input className="px-6 py-1 border-2 ml-2 rounded-full" placeholder="Search Restaurant Name" value={searchtext}
                onChange={(e) => { setsearchtext(e.target.value) }}>
              </input>
              <button className="px-6 py-1 border-2 ml-2 rounded-full " onClick={() => {
                const filtterr = RestoD.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                setlistofres(filtterr);
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
        </div>
        <div className=" p-4 flex flex-wrap mx-auto">
          {listofres.map((insid) => (<Link key={insid?.info?.id} to={"/restarunt/" + insid?.info?.id}><Mainresto data={insid?.info} /></Link>))}
        </div>
      </div>
    </div>
  );
};

export default Rescard;