import { useState } from "react"
import { useDispatch,useSelector} from "react-redux";
import { cityInfo } from "../Redux/City/action";

export const AddCity=()=>{
    const [City,setCity]=useState("");
    const [population,setpopulation]=useState();
    const [Country,setCountry]=useState("");
    const dispatch=useDispatch();
    const state=useSelector((state)=>state);
    // console.log(state);
    const addcity=()=>{
        // console.log(city ,"city is");
        const payload={
            Country,
            City,
            population
        }
        dispatch(cityInfo(payload));

    }
    return(
        <div>
            <input type="text" required onChange={(e)=>setCity(e.target.value)}  placeholder="Enter the city name"/>
            <input type="number"
            onChange={(e)=>setpopulation(e.target.value)}
             required placeholder="Enter the population" />
            <input type="text" 
             onChange={(e)=>setCountry(e.target.value)}
         
            required placeholder="Enter the country name" />
            <button onClick={addcity}>ADD CTIY</button>
        </div>
    )
}