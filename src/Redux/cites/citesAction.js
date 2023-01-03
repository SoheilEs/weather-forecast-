import axios from "axios";
import { geoApiOptions } from "../../api";

const fetchCitesRequst = () => {
    return {
        type : "FETCH_CITES_REQ"
    }
}
const fetchCitesSuccess = cites =>{
    return{
        type : "FETCH_CITES_SUCCESS",
        payload : cites
    }
}
const fetchCitesFail = err =>{
    return{
        type : "FETCH_CITES_FAIL",
        payload : err
    }
}



export const fetchCites = (name) => {
    return  dispatch =>{
        dispatch(fetchCitesRequst())
        axios.get(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${name}`,{
            headers: geoApiOptions.headers
        })
        .then( res => {
             const cites = res.data
            dispatch(fetchCitesSuccess(cites))
        })
        .catch(err=>{
            const errMsg = err.message
            dispatch(fetchCitesFail(errMsg))
        })
    }
}
