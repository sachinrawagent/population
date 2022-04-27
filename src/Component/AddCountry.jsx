import { useState } from "react"
import { useDispatch,useSelector} from "react-redux";
import { countryInfo } from "../Redux/Country/action";
export const AddCountry=()=>{
    const [Country,setCountry]=useState("");
    const dispatch=useDispatch();
    const state=useSelector((state)=>state)
    console.log(state,"The state is ")
    const submitdata=()=>{
        const payload={
            Country
        }
        dispatch(countryInfo(payload));
    }
    return(
        <>
        <input type="text" placeholder="Enter the country name"
        onChange={(e)=>setCountry(e.target.value)}
         /> <br />
         <button onClick={submitdata}>Add City</button> <br />
        </>
    )
}