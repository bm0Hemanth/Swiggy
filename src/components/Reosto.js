
const Reosto = ({ sata }) => {
  console.log(sata);

  //const{resdata}=props;
  const { name, avgRating, cuisines, aggregatedDiscountInfoV3, cloudinaryImageId, sla, areaName } = sata?.info;
  return (
    <div className="pt-4">
      <div className="w-[321px]  pr-8 pl-4  hover:scale-90 duration-300 overflow-x-auto">
        <div className="relative">
          <img className="rounded-2xl object-cover  w-[273px] h-[181px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
          <div className="absolute bottom-0 left-0 rounded-bl-2xl bg-gray-400 font-bold text-gray-900">{aggregatedDiscountInfoV3?.header}  ITEMS  {aggregatedDiscountInfoV3?.subHeader}</div>
        </div>
        <div className="font-bold"> {name}</div>
        <div className="font-medium"><span>{avgRating}</span> - {sla?.slaString} mins</div>
        <div className="font-normal text-gray-600">
          <div> {cuisines.join(",")}</div>
          <div>{areaName}</div>
        </div>
      </div>
      <button ></button>
    </div>
  )
};
export default Reosto;