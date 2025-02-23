import { useEffect, useState } from "react";
import { RestoAPI } from '../utiles/RestoAPI';


const useFetchdataIdentityResto = (Id) => {
    const [resinfo, setResinfo] = useState(null);

    useEffect(() => {
        fetchdata();
    }, []
    );
    const fetchdata = async () => {
        const response = await fetch(RestoAPI + Id);
        const json = await response.json();
        setResinfo(json?.data);
    }
    return resinfo;
};
export default useFetchdataIdentityResto;