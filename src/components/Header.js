import { useSelector } from "react-redux";
import { Link } from "react-router";



const Header = () => {
  const cartitem = useSelector((store)=>store.cart.items);
  console.log(cartitem);
  return (
   <div className="">
   <div className="h-20 shadow-md  flex justify-around">
      <div className="logo-container flex items-center ">
  <Link to="/">
    <img
      className="w-[42.2px] rounded-lg cursor-pointer hover:scale-125 duration-300"
      src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwXFrmOgcrHbhMcKpRMwwjSvmvh0oPWJTtwQqlC3Ei2OIG9_NZ3zMszJpdOVEUDMz6qOpKRHLtnbtNlFublHM2pAxAwCSe89sdPMpU9g"
      alt="Logo"
    />
  </Link>
  <div className="text-sm underline pt-[10px] ml-[30px]  hover:text-orange-600 poi cursor-pointer">Other</div>
</div>

      <div className="px-5 text-base font-[ProximaNova,arial]">
        <ul className="p-5 flex ">
          <li className="pr-7 hover:text-orange-600 poi cursor-pointer">Swiggy Corporate</li>
          <li className="pr-7  hover:text-orange-600 poi cursor-pointer">Search</li>
          <li className="px-7 pl-0 hover:text-orange-600 poi cursor-pointer">Offers<sup className="text-orange-500 text-[10px]">NEW</sup></li>
          <li className="px-7 pl-0 hover:text-orange-600 poi cursor-pointer ">
            <Link to="/About" >About</Link> </li>
          <li className="px-7 pl-0 hover:text-orange-600 poi cursor-pointer">Sign In</li>
          <li className="px-7 pl-0 hover:text-orange-600 poi cursor-pointer">  <Link to="/Cart" >Cart-({cartitem.length})</Link></li> 
        </ul>
      </div>
    </div>
    </div>
  );
};
export default Header;
