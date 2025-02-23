import { useEffect, useState } from "react";
import Simmerui from "./Simmerui";
import { useParams } from "react-router";
import { RestoAPI } from "../utiles/RestoAPI";
import useFetchdataIdentityResto from "./useFetchdataIdentityResto";
import RestoOffers from "./RestoOffers";
import RestoItems from "./RestoItems";

const RestoDetails = () => {
  const { Id } = useParams();
  const resinfo = useFetchdataIdentityResto(Id);
  const[showIndex,setshowIndex]=useState(null);

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, slaString, sla } = resinfo?.cards[2]?.card?.card?.info ?? {};

  const Deals = resinfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const menu = resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return resinfo === null ? (<Simmerui />) : (
    <div className="p-4  w-[800px] mx-auto  px-4" >
      <div>
        <h1 className="font-bold text-2xl m-3 ">{name}</h1>
        <div className="   px-4 pb-4  bg-gradient-to-t from-slate-200 to-gray-100 rounded-[25px] flex  items-center justify-center">
          <div className="w-[800px] h-[160px] p-3 border-[2px] border-gray-400 bg-white rounded-[25px] ">
            <div className="mx-4 h-5 font-bold flex">{avgRating}({totalRatingsString}) <div className="mx-4 h-5 font-bold">{costForTwoMessage}</div>  </div>
            <div className="mx-4 my-2 h-5 font-bold text-orange-700">{cuisines.join(",")}</div>
            <div className=" mx-5 p-1 flex">
              <div className="mr-3 pl-4  ">
                <div className="flex w-auto "><div className='font-bold'>Outlet </div><div className="ml-2 text-gray-700 ">{areaName}</div> </div>
                <div className="mt-2">{sla.slaString}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-2xl m-3">Deals for you</h1>
      <div className="flex overflow-x-hidden">
        {Deals.map((inf) => <RestoOffers key={inf?.info?.header} data={inf?.info} />)}
      </div>

      {menu.map((items , index )=><RestoItems key={items?.card?.card?.title} Rata={items?.card?.card} showItem={index === showIndex ? true : false} setshowIndex={()=>setshowIndex(index)} />)}

    </div>
  );
};
export default RestoDetails;