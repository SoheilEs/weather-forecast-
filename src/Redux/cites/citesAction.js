import axios from "axios";


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
            headers:{
                'X-RapidAPI-Key': '6b2b902311msh38b72d561883d3ap13d158jsn7829f3319540',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
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
