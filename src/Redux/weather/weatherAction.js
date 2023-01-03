import axios from "axios"
import { weatherAPI } from "../../api"

const fetchWeatherRequst = () => {
    return {
        type : "FETCH_REQ"
    }
}
const fetchWeatherSuccess = weather =>{
    
    return{
        type : "FETCH_SUCC",
        payload : weather
    }
}
const fetchWeatherFail = err =>{
    return{
        type : "FETCH_FAIL",
        payload : err
    }
}


export const fetchWeather=(lat,lon)=>{
    return dispatch =>{
        dispatch(fetchWeatherRequst())
        axios.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPI}&units=metric`),
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPI}&units=metric`)
        ])
        .then(  res =>{
            const weather =  [ res[0].data,res[1].data]
           
            dispatch( fetchWeatherSuccess(weather))
        })
        .catch(err => dispatch(fetchWeatherFail(err.message)))
    }
}

