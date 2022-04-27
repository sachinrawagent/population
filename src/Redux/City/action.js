
export const CITY_SUCCESS= 'CITY_SUCCESS';
export const CITY_ERROR = 'CITY_ERROR';


export const cityAdded = (payload) => {
    return {
        type: CITY_SUCCESS,
        payload
    }
}

export const cityError = () => {
    return {
        type: CITY_ERROR
    }
}

export const cityInfo = ({City,population,Country}) => (dispatch) => {
    console.log("In the cityInfo",);
    
    fetch(`https://countrywise.herokuapp.com/city`, {
        method: "POST",
        body: JSON.stringify({City,population,Country}),
        headers: {
            "Content-Type": "Application/json"
        }
    }).then((res) => res.json())
        .then((res) => dispatch(cityAdded(res)))
        .catch((err) => dispatch(cityError(err)))
}