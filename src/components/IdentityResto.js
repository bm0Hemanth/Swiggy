import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { RestoAPI } from '../utiles/RestoAPI';


const IdentityResto = () => {

return (
  <div className="p-4  w-[800px] mx-auto  px-4" >
    <div>
      <h1 className="font-bold text-2xl m-3 ">name{}</h1>
      <div className="   px-4 pb-4  bg-gradient-to-t from-slate-200 to-gray-100 rounded-[25px] flex  items-center justify-center">
        <div className="w-[800px] h-[160px] p-3 border-[2px] border-gray-400 bg-white rounded-[25px] ">
          <div className="mx-4 h-5 font-bold"> avgRating{}totalRatingsString({}) </div>
          <div className="mx-4 my-2 h-5 font-bold text-orange-700">cuisines{}</div>
          <div className=" mx-5 p-1 flex">
            <div className="mr-3 pl-4  ">
              <div className="flex w-auto "><div className='font-bold'>Outlet</div><div className="ml-2 text-gray-700 ">areaName{}</div> </div>
              <div className="mt-2">{listofresto?.sla?.slaString}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>

);
};
export default IdentityResto;