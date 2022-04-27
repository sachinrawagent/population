import { COUNTRY_ERROR, COUNTRY_SUCCESS } from "./action";
const initialState={
    success:false,
    error:false,
    Country:""
}
export const countryReducer=(store=initialState,{type,payload})=>{
    switch(type){
        case COUNTRY_SUCCESS:
            return{
                ...store,
                success:true,
                city:payload
            }
        case COUNTRY_ERROR:
            return{
                ...store,
                error:true
            }
        default:
            return store;
        
    }


}