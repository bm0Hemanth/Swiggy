import { useEffect, useState } from "react";


const useRescard = (API)=>{
    const[ listofresto , setListofresto ] =useState([]); 
    useEffect(()=>{
        fetchdata();
    },[]);

   const  fetchdata= async()=>{
    const response = await fetch(API);
    const json = await response.json();
    setListofresto(json);
   }
    return listofresto;
};
export default useRescard;