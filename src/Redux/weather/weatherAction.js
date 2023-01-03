import axios from "axios"

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

const API = '5f7318dca01d6e23d86fb26498f83ca4'

export const fetchWeather=(lat,lon)=>{
    return dispatch =>{
        dispatch(fetchWeatherRequst())
        axios.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`),
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric`)
        ])
        .then(  res =>{
            const weather =  [ res[0].data,res[1].data]
            console.log(weather[1])
            dispatch( fetchWeatherSuccess(weather))
        })
        .catch(err => dispatch(fetchWeatherFail(err.message)))
    }
}

