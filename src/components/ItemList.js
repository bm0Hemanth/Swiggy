import { useDispatch } from "react-redux";
import { additems } from "../utiles/cartslice";

const ItemList = ({ itams }) => {



    const dispatch = useDispatch();
    console.log(dispatch);

    const clickhand = (item) => {
        dispatch(additems(item));
    };


    return (
        <div>
            {
                itams.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between" >
                        <div>
                            <div className=""><span className="font-bold">{item.card.info.name}</span>
                                <span className="font-semibold">-₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span></div>
                            <p className="text-xs text-gray-400 ">{item.card.info.description}</p>
                        </div>
                        <div className="relative">
                            <img className=" h-full w-32 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId}></img>
                            <button className=" absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-green-600 px-2 py-1 text-sm font-semibold shadow-md border rounded-lg hover:bg-green-100"
                                onClick={() => clickhand(item)}>Add+</button>
                        </div>
                    </div>

                ))
            }
        </div>
    )
};
export default ItemList;