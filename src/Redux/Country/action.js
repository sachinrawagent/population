export const COUNTRY_SUCCESS= 'CITY_SUCCESS';
export const COUNTRY_ERROR = 'CITY_ERROR';

export const countryAdded = (payload) => {
    return {
        type: COUNTRY_SUCCESS,
        payload
    }
}
export const countryError = () => {
    return {
        type: COUNTRY_ERROR
    }
}
export const countryInfo=({Country})=>(dispatch)=>{
    fetch(`https://countrywise.herokuapp.com/countries`,{
        method:"POST",
        body:JSON.stringify({Country}),
        headers:{
            "Content-Type":"Application/json"
        }
    })

}