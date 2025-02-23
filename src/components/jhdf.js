import{useState , useEffect} from 'react';
import { useParams } from 'react-router';


           
const IdentityResto = () => {  
    const [listofresto, setListofresto] = useState({});
    const[Offerdeals,setOfferdeals]=useState({});
  
    
     
      const {resId} =useParams();


   useEffect(()=>{
    fetchdata();
   } , []);

    const fetchdata =async()=>{
        const response=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json =await response.json();
        console.log(json);
        setListofresto(json?.data.cards[2].card.card.info);
        setOfferdeals(json.data.cards[3].card.card.gridElements.infoWithStyle.offers[0].info);
    };
  const {name,avgRating,totalRatingsString,cuisines,areaName ,resid}=listofresto;
  const { description,header}=Offerdeals;
  return (
    <div className="p-4  w-[800px] mx-auto  px-4" >
       <div>
        <h1 className="font-bold text-2xl m-3 ">{name}</h1>
        <div className="   px-4 pb-4  bg-gradient-to-t from-slate-200 to-gray-100 rounded-[25px] flex  items-center justify-center">
            <div className="w-[800px] h-[160px] p-3 border-[2px] border-gray-400 bg-white rounded-[25px] ">
                <div className="mx-4 h-5 font-bold"> {avgRating}({totalRatingsString}) </div>
                <div className="mx-4 my-2 h-5 font-bold text-orange-700">{cuisines}</div>
                <div className=" mx-5 p-1 flex">
                    <div className="mr-3 pl-4  ">
                        <div className="flex w-auto "><div className='font-bold'>Outlet</div><div className="ml-2 text-gray-700 ">{areaName}</div> </div>
                        <div className="mt-2">{listofresto?.sla?.slaString}</div>
                    </div>
                </div>
        </div>
        </div>
       </div>
       <div>
       <h1 className="font-bold text-2xl m-3">Deals for you</h1>
       <div>
         <div>
              <div className="flex p-3">
                 <div className="w-[320px] h-[75px] border-[2px] border-gray-400 bg-white rounded-[25px] ">
                    <div className="p-3 flex">
                      <img className="w-12 h-12 object-cover"src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day' ></img>
                      <div className="ml-3">
                            <div className='font-bold'>{header}</div>
                            <div className='text-gray-700'>{description}</div>
                      </div>
                    </div>   
                 </div>
              </div>
         </div>
       </div>
       </div>
       <div>
         <h1 className="font-bold text-2xl m-3">Recommended </h1>
         <div>
            <div className="w-[552px]">
                <div>veg</div>
                <div>name</div>
                <div>price</div>
                <div>rating</div>
                <div></div>
            </div>
            <div>
                <img></img>
                <button>add</button>
            </div>
         </div>
       </div>
    </div>

  );
};
export default IdentityResto;