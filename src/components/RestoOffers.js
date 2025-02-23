const RestoOffers = ({ data }) => {
    return (
       <div className="flex"> 
        <div >
            <div>
                <div>
                    <div className="flex p-3">
                        <div className="w-[320px] h-[75px] border-[2px] border-gray-400 bg-white rounded-[25px] ">
                            <div className="p-3 flex">
                                <img className="w-12 h-12 object-cover" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day' ></img>
                                <div className="ml-3">
                                    <div className='font-bold'>{data?.header}</div>
                                    <div className='text-gray-700'>{data?.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default RestoOffers; 