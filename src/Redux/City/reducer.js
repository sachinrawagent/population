import { CITY_ERROR,CITY_SUCCESS } from "./action";
const initialState={
    success:false,
    error:false,
    City:[]
}

export const cityReducer=(store=initialState,{type,payload})=>{
    switch(type){
        case CITY_SUCCESS:
            return{
                ...store,
                success:true,
                city:payload
            }
        case CITY_ERROR:
            return{
                ...store,
                error:true
            }
        default:
            return store;
        
    }


}