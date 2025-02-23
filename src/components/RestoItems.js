import { useState } from "react";
import ItemList from "./ItemList";

const RestoItems = ({ Rata ,showItem , setshowIndex}) => {
 
   const clickhand=()=>{ 
    setshowIndex();
   };

  return (
    <div>
      <div className=" p-2  shadow-lg">
        <div className="flex justify-between font-bold cursor-pointer" onClick={clickhand} >
          <span>{Rata?.title}({Rata?.itemCards?.length})</span>
          <span>⬇</span>
        </div>
        {showItem && <ItemList itams={Rata.itemCards} />}
      </div>

    </div>


  )
}
export default RestoItems;