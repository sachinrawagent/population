import { useState } from "react"
import { useDispatch,useSelector} from "react-redux";
import { cityInfo } from "../Redux/City/action";

export const AddCity=()=>{
    const [City,update]=useState("");
    const [population,updatepop]=useState();
    const [Country,updatecoun]=useState("");
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
            <input type="text" required onChange={(e)=>update(e.target.value)}  placeholder="Enter the city name"/>
            <input type="number"
            onChange={(e)=>updatepop(e.target.value)}
             required placeholder="Enter the population" />
            <input type="text" 
             onChange={(e)=>updatecoun(e.target.value)}
         
            required placeholder="Enter the country name" />
            <button onClick={addcity}>ADD CTIY</button>
        </div>
    )
}